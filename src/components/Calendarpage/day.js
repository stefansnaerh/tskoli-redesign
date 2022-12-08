import './calendarpage.scss';







const Day = ({calendar, plan}) => {
        return (
        <>
        {calendar.filter(event => {
            //console.log(Math.floor(plan/(60*60*24*1000)))
            //console.log(Math.floor(Date.parse(event.Starting)/(60*60*24*1000)))
           
            //console.log(d.getDay())
            return Math.floor(plan/(60*60*24*1000)) === Math.floor(Date.parse(event.Starting)/(60*60*24*1000))
          }).map(item => {
            const from = (new Date(item.Starting))
            const fromh = from.getHours()
            const fromm = from.getMinutes() <10? "0" + from.getMinutes():from.getMinutes();
      
            const to = (new Date(item.Ending))
            const toh = to.getHours()
            const tom = to.getMinutes() <10? "0" + to.getMinutes():to.getMinutes();
          
            return (
            <>

               <div className="time">
                      <p className='color'> {`${fromh}:${fromm} - ${toh}:${tom}`} </p>
               </div>
                  
                  
                  <div className="daydescription">
                    {/**Module description is below */}
                  <a href="" >
                      <p>
                        <h4>{item.Title}</h4>
                        <h4>{item.Description}</h4> 
                      
                        
                      </p>
                      
                  </a>
                  </div>
              </>
            )
      
          })}
          </>)
}
 
export default Day;