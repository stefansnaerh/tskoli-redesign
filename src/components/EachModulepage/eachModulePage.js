
import './eachModulePage.scss';
import { useState, useEffect } from 'react';
import api from '../../utils/api'
import sortModulesAndReviews from '../../utils/sortModulesAndReviews';
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
      
      useEffect(() => {
          //map through guides and make objects with all properties i need. I then
          // use these objects in as parameters in the sortModulesAndReviews function to 
          // sort guides,returns and reviews
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
         // Rearrange the data and implement data from assignments api call
         const count = {}
        const {order, ordered} = sortModulesAndReviews(newModules, count, newReturns, setLoading, newReviews) 
        setCurrentModule(order[3])

        //updating state with the sorted modules and number of guides in each module
        setCurrentGuides(Object.values(ordered)[3])
      }, [guides])

      // Put guide name and isReturned in same array so i can get info from same map() in line 105
      let sortReturnWithTitle
      if (loading === false) {
       const zip = (a1, a2, a3, a4) => a1.map((x, i) => [x, a2[i], a3[i], a4[i]]);
       sortReturnWithTitle= zip(currentGuides.name, currentGuides.isReturned, currentGuides.isReviewed, currentGuides.grade)
       }
    return(
        <section className='guides-section-container'>
          {loading ? (<p>loading.....</p>) : 
          (
            <>
            <div className='name-button-container'>
            <h1 className='guide-header'>{currentModule}</h1>
        <div className='guide-btns-container'>
            <button href = "#" className='guides-btn'>GUIDES</button>
            <button href = "#" className='myreturn-btn'>MY RETURNS</button>
        </div>
        </div>
        <div className='all-guides-container'>
        {sortReturnWithTitle.map((name, key) => {
            return (
                <div className='guide-review-wrapper'>
                <div key={key} className="guide-container" style={name[1] === false? {backgroundColor: "#E2E2E2"} : {backgroundColor: "#B5E2A8"}}>
                  <a className='guide-link' href="">
                      <h1>Guide {key +1}</h1>
                      <h3>{name[0]}</h3>
                  </a>
                </div>
                <div className='isReviewed-card' style={name[2] === false? {backgroundColor: "#E2E2E2"} : {backgroundColor: "#B5E2A8"}}>
                  {name[1] === false ? (
                    <h1>Guide not returned</h1>
                  ) : name[2] === false ? (
                    <h1>Need to review!</h1>
                  ): 
                    <div className='grade-review'>
                      <h1>Reviewed</h1>
                      {name[3] === undefined ? 
                      (<h4>Grade coming up!</h4>) :
                      <h4>Grade : {name[3]}</h4>}
                    </div>}
            </div>
            </div>
            )
        } )}
        </div>
            </>
          )}
        </section>
    )
};



export default EachModulepage;


