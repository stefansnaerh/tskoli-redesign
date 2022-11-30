import './sidebar.scss';
import { useState } from 'react';
import Calendar from 'react-calendar';
import dpp from '../../images/default-profile-picture.svg';


const Sidebar = () => {

    const [date, setDate] = useState(new Date())

    return (
        <>
        {/* Here we have the div tag for user info */}
        <div className="sidebar-container">

            <div className="user-pic/name">
                <div>
                    <img className='default-profile-picture' src={dpp} alt="user-pic"/>
                </div>
                <div className="user-name">
                    <p className='name'>Nemandi Nemandasson</p>
                </div>
            </div>

            {/*Here is the div tag for the calendar */}
            <div className="app">
                <div calendar-container>
                    <Calendar onChange={setDate} value={date}/>
                </div>
                <div className="text-center"></div>
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