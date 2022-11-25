
import './eachModulePage.scss';
import { useState, useEffect } from 'react';
import api from '../../utils/api'
import sortModulesAndReturns from '../../utils/sortModulesAndReturns';
import { useAuth } from '../../utils/authContext';


const EachModulepage = () => {
    const {login} = useAuth();
    const [reviews, setReviews] = useState([]);


    const [guides, setGuides] = useState([]);
    const [myAssignemnts, setMyAssignments] = useState([])
    const [currentGuides, setCurrentGuides] = useState([])
    const [currentModule, setCurrentModule] = useState([])

    const [loading,setLoading] = useState (true)

    useEffect(()=>{
        const getGuides = async ()=>{
          const g = await api.get('/guides');
          const a = await api.get('/assignmentreturns')
          // filter away hidden guides and update to state
          setGuides(g.data.filter(g => !g.hidden))
          setMyAssignments(a.data)
         
        }
        getGuides()
      },[])
      // refactor this to one useEffect with the one above??
      useEffect(()=>{
        const getReviews = async ()=>{
          const g = await api.get('/reviews/');
          setReviews(g.data)
        }
        getReviews();
      },[login])

      console.log(reviews)
      const count = {}
      useEffect(() => {
          //map through guides and make objects with all properties i need 
         const newModules = guides.map(guide => {
           return {
              title: guide.project.Title,
              id: guide._id,
              guideTitle: guide.Title,
              isReturned: false,
              isReviewed: false,
              feedback: "",
              grade: 0
           }
         });
         console.log(newModules)
          // get ids of returned assignnments
         const newReturns = myAssignemnts.map(assignment => {
          return assignment.assignment}
      );
          
          const newReviews = reviews.map(assignment => {
            return {
              assignment : assignment.assignment,
              feedback: assignment.feedback,
              grade: assignment.grade
            }
          })
          console.log(newReviews)
         // Rearrange the data and implement data from assignments api call
        const {order, ordered} = sortModulesAndReturns(newModules, count, newReturns, setLoading, newReviews) 
        setCurrentModule(order[3])
        //updating state with the sorted modules and number of guides in each module
        setCurrentGuides(Object.values(ordered)[3])
        for (const element of newReviews){
          console.log(element)
        }
      }, [guides])
      console.log(currentGuides)
    
      // Put guide name and isReturned in same array so i can get info from same map() in line 105
      let sortReturnWithTitle
      if (loading === false) {
       const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
       sortReturnWithTitle= zip(currentGuides.name, currentGuides.isReturned)
       }
    return(
        <section className='guides-container'>
          {loading ? (<p>loading.....</p>) : 
          (
            <>
            <h1 className='guide-header'>{currentModule}</h1>
        <div className='guide-btns-container'>
            <button href = "#" className='guides-btn'>Guides</button>
            <button href = "#" className='myreturn-btn'>My returns</button>
        </div>
      
        {sortReturnWithTitle.map((name, key) => {
            return (
                <>
                <div key={key} className="guide-container" style={name[1] === false? {backgroundColor: "#E2E2E2"} : {backgroundColor: "#B5E2A8"}}>
                <a className='guide-link' href="">
                    <h1>Guide {key +1}</h1>
                    <h3>{name}</h3>
                </a>
            </div></>
            )
        } )}
            </>
          )}
        </section>
    )
};



export default EachModulepage;


