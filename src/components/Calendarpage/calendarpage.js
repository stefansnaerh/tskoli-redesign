import { useState, useEffect} from "react";
import './calendarpage.scss';
import { getEvents, updateEvent } from "../api.js";
import Day from './day';




const Calendarpage = () => {
  const [calendar, setCalendar] = useState([]);
  
  const [plan, setPlan] = useState(Date.now());
  const [selectedDate, setSelectedDate] = useState(-1)


  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
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
  

  {/*useEffect(() => {}*/}

  
    
    //console.log(eventLocation)

{/**I want to create a click event

    const handleClick = (name, e) => {
      console.log('hello' + name, e.pointerId);
    } */}

    const handleClick = (day) => {
      const d = new Date()
      const dayOffset = day - d.getDay()
      //console.log(day)
      setPlan(addDays( dayOffset, Date.now()))
     
      setSelectedDate(day)
      
      
    };
   const selectedStyle = {backgroundColor:'#D1D0F9'}
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
                <p className='month-year'>{name}</p>
                <p className='month-year'>{year}</p>
              </div>
                <p className='date'> {`< ${weekStart} - ${weekEnd} >`} </p>
            </div>
            





          <div className="day">
            <ul className='list-container'>
                <li className='list' style={selectedDate===1? selectedStyle:{}} onClick={ () => handleClick( 1)}>Mon</li>
                <li className='list' style={selectedDate===2? selectedStyle:{}} onClick={ () => handleClick( 2)}>Tue</li>
                <li className='list' style={selectedDate===3? selectedStyle:{}} onClick={ () => handleClick( 3)}>Wed</li>
                <li className='list' style={selectedDate===4? selectedStyle:{}} onClick={ () => handleClick( 4)}>Thur</li>
                <li className='list' style={selectedDate===5? selectedStyle:{}} onClick={ () => handleClick( 5)}>Fri</li>
               
            </ul>
          </div>

          <div className='timeanddescription'>
            {weekDays.map(day =>{
              return (
              <div className="wrapper"><Day key={day} calendar={calendar} plan={day}></Day></div>)})
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