import './sidebar.scss';
import { useState } from 'react';
import Calendar from 'react-calendar';


const Sidebar = () => {

    const [date, setDate] = useState(new Date())

    return (
        <>
        {/* Here we have the div tag for student's Sidebar info */}
        <div className="content">
            <h3>Welcome Back!</h3>
        
        <div className="sidebar">
          <div>
            <img src="" alt="Sidebar picture" />
          </div>
            <div className="sidebar-info">
              <p className='name'>Karítas Witting Halldórsdóttir</p>
              <p className='mail'>karitashall@gmail.com</p>
            </div>
        </div>

        {/*Here is the div tag for the calendar */}
        <div className="app">
            
            <div calendar-container>
                <Calendar onChange={setDate} value={date}/>
            </div>

            <div className="text-center">
                Selected date: {date.toDateString()}
            </div>
             {/*<iframe className="calendar" src="https://calendar.google.com/calendar/embed?src=nhp4gh3o11km1m6en6vk3dtp48%40group.calendar.google.com&ctz=Atlantic%2FReykjavik" ></iframe>*/}
        </div>
        
        {/*Here we have the div tag for the next 3 upcoming modules*/}
            <p className='next-up'>Next up</p>
        <div className="nextup-container">
            <div >
                <a href = "#" className='next'>
                    <p className='module'>Module 4</p>
                    <p>Guide 4 - Speciality</p>
                </a>
            </div>

            <div>
                <a href = "#" className='next' >
                    <p className='module'>Module 5</p>
                    <p>Guide 1 - Back-end 1</p>
                </a>
            </div>

            <div>
                <a href = "#" className='next'>
                    <p className='module'>Module 5</p>
                    <p>Guide 2 - Back-end 2</p>
                </a>
            </div>
          </div>
        </div>
        </>
    )
}


export default Sidebar;