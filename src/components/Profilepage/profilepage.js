import './profilepage.scss';
import { useState, useEffect} from 'react';
import dpp from '../../images/default-profile-picture.svg';
import api from '../../utils/api'










const Profilepage = (props) => {
    const profilePopup = props.profilePopup;
    
    const [student, setStudent] = useState({});

    useEffect(() => {
        const getData = async () => {
        const user = await api.get('/auth/me');
        const userData = await api.get(`/users/${user.data._id}`);
        console.log(user)
        setStudent(user.data)
        }

        getData()
    })



    return ( 
        <>
          <div style={{display:profilePopup?'block':'none'}}  className='main-container'>

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
                  <textarea name="background" maxLength="500" required></textarea>
                </div >

                <div class="container">
                  <label>Near future career goals?</label>
                  <textarea className="text" name="careerGoals" maxLength="500" style={{ width: "80%" }} required></textarea>
                </div>

                <div class="container">
                  <label>Main interests?</label>
                  <textarea name="interests" maxLength="500" style={{ width: "80%" }} required></textarea>
                </div>

                <div class="container">
                  <label>Favourite band/s or artist/s</label>
                  <textarea name="favoriteArtist" maxLength="500" style={{ width: "80%" }}></textarea>
                </div>

                <div>
                    <button>EDIT</button>
                </div>

            </div>
        
          </div>
        </>
     );
}
 
export default Profilepage;