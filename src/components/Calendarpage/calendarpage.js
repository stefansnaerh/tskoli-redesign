
import './calendarpage.scss';





const Calendarpage = () => {
    return ( 
        <>
          <div>
           <h3>Calendar</h3>
           <h4>November 2022</h4>
        
          <div >
            
                <button href = "#" className='week'>
                
                    <p>Week</p>

                </button>
        


        
            
                <button href = "#" className='month'>
                
                    <p>Month</p>
                    
                </button>
          </div>


          <div className="day">
            <ul>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thur</li>
                <li>Fri</li>
                <li>Sat</li>
                <li>Sun</li>
            </ul>
          </div>
          <div>
            <div className="time">

            </div>
            
            <div className="daydescription">
            <a href="">
                <h4>9-4pm</h4>
                <p>Module 4<br></br>Group project <br></br> Design Thinking Sprint</p>


            </a>







        </div>

          </div>

          </div>
        
        
        
        
        
        
        
        </>
     );
}
 
export default Calendarpage;