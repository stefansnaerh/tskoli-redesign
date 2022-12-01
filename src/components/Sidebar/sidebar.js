import './sidebar.scss';
import { useState, useEffect, useRef} from 'react';
import Calendar from 'react-calendar';
import dpp from '../../images/default-profile-picture.svg';
import api from '../../utils/api'
import Profilepage from '../Profilepage/profilepage';




  const Sidebar = () => {
  const menuRef = useRef();
  const [date, setDate] = useState(new Date());
  const [student, setStudent] = useState({});
  const [guides, setGuides] = useState([]);
  const [profilePopup, setProfilePopup] = useState(false);
  
  

 
 useEffect(() => {

        const getData = async () => {
        const user = await api.get('/auth/me');
        const userData = await api.get(`/users/${user.data._id}`);
       console.log(user)
        setStudent(user.data)

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



    return (
        <>
        {/* Here we have the div tag for user info */}
        <div className="sidebar-container" >

            <div className="user-pic/name">
                <div>
                    <img onClick={() => setProfilePopup(true)} className='default-profile-picture' src={dpp} alt="user-pic"/>
                </div>
                <div className="user-name">
                    <h3 >{student?.name}</h3>
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
                console.log(guide)
                return (

                <div >
                    <a href = {`/guides/${guide._id}`} className='next'>
                        <p className='module'>{guide.project.Title}</p>
                        {guide.Title}
                        
                    </a>
                </div>
                )
            })}

            </div>

        </div>

        <div style={{display:profilePopup?'block':'none'}} className='main-container' ref={menuRef}>

            <div className="user-pic/name">
                <div>
                <img className='default-profile-picture' src={dpp} alt="user-pic"/>
                </div>
                <div className="user-name">
                <h3>{student?.name}</h3>
                <p>{student?.email}</p>
                </div>
            </div>

            <div className='form-container'>

                <div className="container">
                <label>Background - What have you studied or worked with?</label>
                <textarea name="background" maxLength="500" style={{ width: "80%" }} required></textarea>
                </div >

                <div class="container">
                <label>Near future career goals?</label>
                <textarea name="careerGoals" maxLength="500" style={{ width: "80%" }} required></textarea>
                </div>

                <div class="container">
                <label>Main interests?</label>
                <textarea name="interests" maxLength="500" style={{ width: "80%" }} required></textarea>
                </div>

                <div class="container">
                <label>Favourite band/s or artist/s</label>
                <textarea name="favoriteArtist" maxLength="500" style={{ width: "80%" }}></textarea>
                </div>
                <br />
                <div>
                    <button>SAVE</button>
                </div>

            </div>

</div>
        </>
    )
}


export default Sidebar;