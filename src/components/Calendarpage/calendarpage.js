import { useState, useEffect} from "react";
import './calendarpage.scss';
import { getEvents, updateEvent } from "../api.js";
import Day from './day';




const Calendarpage = () => {
  const [calendar, setCalendar] = useState([]);
  const d = new Date();
  
  const [plan, setPlan] = useState(Date.now());
  const [selectedDate, setSelectedDate] = useState(d.getDay())


  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const name = month[d.getMonth()];
  const year = d.getFullYear();

  const  addDays = (days, date) => {
    const newDate = date + days *1000*60*60*24;
    return  newDate

  }
  useEffect(()=> {
    const getData = async () => {
      const data = await getEvents()
      setCalendar(data)
      console.log(data)
      
    }
    getData();
  },[])

    const handleClick = (day) => {
      const d = new Date()
      const dayOffset = day - d.getDay()
      //console.log(day)
      setPlan(addDays( dayOffset, Date.now()))
     
      setSelectedDate(day)
      
      
    };
  
   const weekDays = [1,2,3,4,5].map(i => addDays(i-d.getDay(),Date.now()))
   const weekStartD = new Date( addDays(0-d.getDay(), Date.now()))
   //console.log(weekStartD.getYear())
   const weekEndD = new Date(addDays (6-d.getDay(), Date.now()))
   const weekStart = weekStartD.getDate() + '.' + (weekStartD.getMonth()+1) +'.' + (weekStartD.getYear()-100)
   const weekEnd = weekEndD.getDate() + '.' + (weekEndD.getMonth()+1) +'.' + (weekEndD.getYear()-100)
   console.log(weekDays)
    return ( 
        
          <div className="calendarhome">
            <div>
              <div className="myear">
                <p className='month-year'>{name.toUpperCase()}</p>
                <p className='month-year'>{year}</p>
              </div>
                <p className='date'> {`< ${weekStart} - ${weekEnd} >`} </p>
            </div>
          <div className="day">
            <ul className='timeanddescription'>
              {['Mon','Tue','Wed','Thur','Fri'].map((day, i) => {
                console.log(i)
                console.log(selectedDate)
                const selectedClass = selectedDate===i+1? 'selected-style':''
                return (
                  <li className={'list '+selectedClass} onClick={ () => handleClick( i+1)}><p>{day}</p></li>
                )
              })}
            </ul>
          </div>

          <div className='timeanddescription'>
            {weekDays.map((day, i) =>{
              const selectedClass = selectedDate===i+1? 'selected-style-day':''
              return (
              <div key={day} className={"wrapper "+selectedClass}><Day  calendar={calendar} plan={day}></Day></div>)})
            }
{/*<Day calendar={calendar} plan={plan}></Day>*/}

          </div>
          {/*<div > This will be visible in desktop view
            <button href = "#" className='week'>
                    <p>Week</p>
                </button>
                <button href = "#" className='month'>
                    <p>Month</p>   
                </button>
    </div>*/}
    

        </div>
     );
}
 
export default Calendarpage;