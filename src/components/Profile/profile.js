import './profile.scss';
import { useState } from 'react';
import Calendar from 'react-calendar';








const Profile = () => {

    const [date, setDate] = useState(new Date())



    return (
        <>
        {/* Here we have the div tag for student's profile info */}
        <div className="content">
            <h3>Welcome Back!</h3>

          <div className="profile">



          <div>
            <img src="" alt="Profile picture" />
          </div>
        
        
        
          <h5>Karítas Witting Halldórsdóttir</h5>
          <p>karitashall@gmail.com</p>
          </div>

          {/*Here is the div tag for the calendar */}
        <div className="app">
            <a href='https://calendar.google.com/calendar/embed?src=nhp4gh3o11km1m6en6vk3dtp48%40group.calendar.google.com&ctz=Atlantic%2FReykjavik'>Calendar</a>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
        </div>
             {/*<iframe className="calendar" src="https://calendar.google.com/calendar/embed?src=nhp4gh3o11km1m6en6vk3dtp48%40group.calendar.google.com&ctz=Atlantic%2FReykjavik" ></iframe>*/}
            
        </div>

        
        {/*Here we have the div tag for the next 3 upcoming modules*/}
        <div className="nextup">
            <h4>Next up</h4>
            <div>
            
                <a href = "#" className='next'>
                    <p><strong>M4</strong></p>
                    <p>Guide 4</p>
                    <p>Speciality</p>


                </a>
            </div>

            <div>
            
                <a href = "#" className='next'>
                    <p><strong>M5</strong></p>
                    <p>Guide 1</p>
                    <p>Back-end 1</p>


                </a>
            </div>


            <div>
            
                <a href = "#" className='next'>
                    <p><strong>M5</strong></p>
                    <p>Guide 2</p>
                    <p>Back-end 2</p>


                </a>
            </div>

           
            
          </div>
        </div>
        </>
    )
}

export default Profile;