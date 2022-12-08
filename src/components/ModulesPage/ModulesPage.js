import { useState, useEffect, useContext } from 'react';
import './ModulesPage.scss'
import api from '../../utils/api'
import { Link } from 'react-router-dom';



import { ModuleToDisplay } from '../../App';

const ModulesPage = () => {
    // using context to pass down state 
    const {displayModule, setDisplayModule} = useContext(ModuleToDisplay)
    
    const [guides, setGuides] = useState([]);
    const [myAssignments, setMyAssignments] = useState([])
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
    console.log(guides)
    console.log(myAssignments)
    // initialise count variable and use it in line 36 to count guides
    const modules = {}
    useEffect(() => {
        //map through guides and make objects with module name and guide id's under each module
       const guidesModuleNames = guides.map(guide => {
         return {
        // array of object with module title and guide-ids
            moduleName: guide.project.Title,
            id: guide._id,
         }
       });

       const myReturns = myAssignments.map(assignment => {
        // all guide ids current user has returned
        return assignment.assignment}
    )
    console.log(myReturns)
    console.log(guidesModuleNames)
       //For of loop to build the count object so that it includes module name as properties
       // and each module name holds an object ids array and number of completed guides called completed

       for (const guideModule of guidesModuleNames){

      
        if (modules[guideModule.moduleName]){// if the module name exists in modules, add guide id to ids array
            modules[guideModule.moduleName].ids.push(guideModule.id)
        } else { // else create new object with guide ids and initialize completed with 0
            modules[guideModule.moduleName] = {ids:[guideModule.id], completed: 0}
        }
        if (myReturns.includes(guideModule.id)){ // if newreturns includes guide id add 1 completed to this module
            modules[guideModule.moduleName].completed++
        }
        // sort the guides title so they appear in right order
        const ordered = Object.keys(modules).sort().reduce(
          (obj, key) => { 
            obj[key] = modules[key]; 
            return obj;
          }, 
          {}
          );  
          console.log(modules)
          //updating state with the sorted modules and number of guides in each module
          setCountModules(ordered)
          setLoading(false)
          
        }
      }, [guides, myAssignments]);


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
