import './sidebar.scss';
import { useState, useEffect, useRef, useContext} from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import dpp from '../../images/default-profile-picture.svg';
import api from '../../utils/api'
import Profilepage from '../Profilepage/profilepage';
import editprofile from '../../images/edit-profile.svg';
import {useLocation } from "react-router-dom"
import {useAuth} from "../../utils/authContext"
import { GuideToDisplay } from '../../App';


  const Sidebar = () => {
  const menuRef = useRef();
  const [date, setDate] = useState(new Date());
  const [student, setStudent] = useState({});
  const [guides, setGuides] = useState([]);
  const [profilePopup, setProfilePopup] = useState(false);
  const location = useLocation();
  const x = useAuth()
  const [image, setImage] = useState(dpp);
  const {displayGuide, setDisplayGuide} = useContext(GuideToDisplay)

 
 useEffect(() => {

        const getData = async () => {
        const user = await api.get('/auth/me/long');
        const userData = await api.get(`/users/${user.data._id}`);
        setStudent(user.data); 
        //Here I put the default profile picture and picture that the user has chosen. 
        //This code says is the first is true then the user has a picture and the code stops reading
        //But if the first one is false/falsy the second line reads and makes the default picture appear 
        user.data.picture && setImage(user.data.picture);
        const guidesData = await api.get(`/guides`);
        //filter out hidden guides
        const guides = guidesData.data.filter(guide => guide.hidden !== true);
        //filter out guides that have not been returned by the user
        const guidesNotReturned = guides.filter(guide => (
            !userData.data.returns.some(returned => returned.assignment._id === guide._id)
        ) && (
            !["2 - Community & Networking", "0 - Preparation"].includes(guide.project.Title)
            )
        );

        //sort guidesNotReturned by the first letter of the project (Module) title
        guidesNotReturned.sort((a, b) => {
            if (a.project.Title[0] < b.project.Title[0]) {
                return -1;
            }
            if (a.project.Title[0] > b.project.Title[0]) {
                return 1;
            }
            return 0;
        });
        //filter out guides with the same project title as the third one (the first two are from module 0)
        const nextUpGuides = guidesNotReturned.filter(guide =>  guide.project.Title === guidesNotReturned[0].project.Title);
        setGuides(nextUpGuides);

       // const reviewsData = await api.get(`/reviews`);
        //setReviews(reviewsData.data);
    };
    const handler = (e) => {
        if(!menuRef.current.contains(e.target)){
            setProfilePopup(false);
        }
    };
    document.addEventListener("mousedown", handler);
   
    getData();
    
},
[]);
//Handle upload on the picture that the user chooses
const handleUpload = (e) => {
    setImage((e.target.value));
}

const updateProfile = async (event) => {
    event.preventDefault()
    
    console.log(event.target.elements)
    //Here we're getting and saving the info about the user into the api
     const {background,careerGoals,favoriteArtist,interests} = event.target.elements
        api.patch("/auth/me", {
        background: background.value,
        careerGoals: careerGoals.value,
        interests: interests.value,
        favoriteArtist: favoriteArtist.value,
        picture: image,
      });
}
    //To hide sidebar from navigation page
    if (location.pathname === "/loginpage") return (<div></div>)
    return (
        <>
        {/* Here we have the div tag for user info */}
        <div className="sidebar-container" >

            <div className="user-pic/name">
                <div>
                    <img onClick={() => setProfilePopup(true)} className='default-profile-picture' src={image} alt="user-pic"/>
                </div>
                <div className="user-name">
                    <h3 style={{fontSize: "1.8rem", fontWeight: "400"}} >{student?.name}</h3>
                </div>
            </div>

            {/*Here is the div tag for the calendar */}
            
            <div calendar-container>
                <Calendar onChange={setDate} value={date}/>
            </div>
            
            {/*Here we have the div tag for the next 3 upcoming modules*/}
            <p className='next-up'>Next up</p>

            <div className="nextup-container">

            {guides.map(guide => {
                return (

                <div >
                    <Link to="/guide" onClick={() => setDisplayGuide(guide._id)} className='next'>
                        <p className='module'>{guide.project.Title}</p>
                        {guide.Title}
                        
                    </Link>
                </div>
                )
            })}

            </div>
        </div>
        
            {/* Here the pop up modal starts */}
        <div style={{display:profilePopup?'block':'none'}} className='main-container' ref={menuRef}>

            <div className="user-pic/name">
            <Link className="logout" onClick={x.logout} to="/loginpage">Logout</Link>
                <div>
                    <img className='default-profile-picture' src={image} alt="user-pic"/>
                    </div>
                    <div className="user-name">
                        <h3 style={{fontSize: "1.8rem", fontWeight: "400"}}>{student?.name}</h3>
                        <p style={{fontSize: "1.6rem"}}>{student?.email}</p>
                    </div>
                    <div className='pictureurl'>
                        <p className='pictureurltxt'>Picture URL</p>
                        <input className="URLpicinput" type="text" name="image" onChange={handleUpload}></input>
                </div>

            </div>

            <form onSubmit= {updateProfile} className='form-container'>

                <label className="profiletxt">Background - What have you studied or worked with?</label>
                <textarea className="profileinput" name="background"  ></textarea>
                
                <label className="profiletxt" >Near future career goals?</label>
                <textarea className="profileinput" name="careerGoals" ></textarea>
              
                <label className="profiletxt">Main interests?</label>
                <textarea className="profileinput" name="interests"  ></textarea>
             
                <label className="profiletxt">Favourite band/s or artist/s</label>
                <textarea className="profileinput" name="favoriteArtist"></textarea>
                
                <button className='savebtn'>SAVE</button>
                 

         </form>
        </div>
    </>
    )
}


export default Sidebar;