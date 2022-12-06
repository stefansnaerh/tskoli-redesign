import { useState, useEffect, useContext } from 'react';
import './ModulesPage.scss'
import api from '../../utils/api'
import { Link } from 'react-router-dom';



import { ModuleToDisplay } from '../../App';

const ModulesPage = () => {
    // using context to pass down state 
    const {displayModule, setDisplayModule} = useContext(ModuleToDisplay)
    
    const [guides, setGuides] = useState([]);
    const [myAssignemnts, setMyAssignments] = useState([])
    const [countModules, setCountModules] = useState({})
    const [loading,setLoading] = useState (true)
    // bera saman id við assignment inni i myassignemnt
    useEffect(()=>{
      const getGuides = async ()=>{
        const g = await api.get('/guides');
        // get all assignments current user has returned
        const a = await api.get('/assignmentreturns')
        // filter away hidden guides and update to state
        setGuides(g.data.filter(g => !g.hidden))
        setMyAssignments(a.data)
       
      }
      getGuides();
      
    },[])
    // initialise count variable and use it in line 36 to count guides
    const count = {}
    useEffect(() => {
        //map through guides and make objects with module name and guide id's under each module
       const newModules = guides.map(guide => {
         return {
        // array of object with module title and guide-ids
            title: guide.project.Title,
            id: guide._id,
         }
       });

       const newReturns = myAssignemnts.map(assignment => {
        // all guide ids current user has returned
        return assignment.assignment}
    )
       //For of loop to build the count object so that it includes module name as properties
       // and each module name holds an object ids array and number of completed guides called completed
       //module should be more descriptive
       //new returns=myReturns
       //elem of mdl..make variable name more of what they are.
       //new mod,new rtns,count...
       //count is an object
       for (const element of newModules){
      
        if (count[element.title]){// if the module title extists in count, add guide id to ids array
            count[element.title].ids.push(element.id)
        } else { // else create new object with guide ids and initialize completed with 0
            count[element.title] = {ids:[element.id], completed: 0}
        }
        if (newReturns.includes(element.id)){ // if newreturns includes guide id add 1 completed to this module
            count[element.title].completed++
        }
        
        // sort the guides title so they appear in right order
        const ordered = Object.keys(count).sort().reduce(
            (obj, key) => { 
              obj[key] = count[key]; 
              return obj;
            }, 
            {}
          );  
          //updating state with the sorted modules and number of guides in each module
        setCountModules(ordered)
        setLoading(false)
        
       }
    }, [guides])

    return (
        <>
      <section className='modules-container'>
        {loading ? (<p>Loading...</p>) : 
        (<>
         <h1 className='modules-header'>{"{ Modules }"}</h1>
        {Object.keys(countModules).map((key, index) => {
          const percentage = Math.round(Object.values(countModules)[index].completed / Object.values(countModules)[index].ids.length * 100)
            return (
                <>
                <div className='module-info-container'>
                    <Link onClick={() => setDisplayModule(index)} to="/modules" className='link'>
                    <h1 className='module' key={index}>Module {key}</h1>
                    </Link>
                    <div className='module-statistics'>
                        <h1>{Object.values(countModules)[index].completed}/</h1>
                        <h1>{Object.values(countModules)[index].ids.length}</h1>
                    </div>
                </div>
                <Link onClick={() => setDisplayModule(index)} to="/modules" className='link'>
                <div className='progress-bar-container'>
                <div className='progress-bar-finished' style={{"background": `#B5E2A8`, "width":`${percentage}%`}}></div>
                <div className='progress-bar-left'></div>
                </div>
                </Link>
                </>
            )
        })}
        </>)}
        </section>
   
        </>
    )
}



export default ModulesPage;

