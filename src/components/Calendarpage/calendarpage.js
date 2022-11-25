
import './calendarpage.scss';





const Calendarpage = () => {
    return ( 
        <>
          <div>
            <div>
              <p className='date'>23.</p>
              <p className='month-year'>November 2022</p>
            </div>



          {/*<div > This will be visible in desktop view
            <button href = "#" className='week'>
                    <p>Week</p>
                </button>
                <button href = "#" className='month'>
                    <p>Month</p>   
                </button>
    </div>*/}


          <div className="day">
            <ul className='list-container'>
                <li className='list'>Mon</li>
                <li className='list'>Tue</li>
                <li className='list'>Wed</li>
                <li className='list'>Thur</li>
                <li className='list'>Fri</li>
                <li className='list'>Sat</li>
                <li className='list'>Sun</li>
            </ul>
          </div>
          <div className='timeanddescription'>
            <div className="time">
                <p className='color'> 9-4pm </p>
            </div>
            
            <div className="daydescription">
            <a href="" >
                <p>Module 4<br></br>Group project <br></br> Design Thinking Sprint</p>
            </a>
            </div>

          </div>

        </div>
        
        
        
        
        
        
        
        </>
     );
}
 
export default Calendarpage;