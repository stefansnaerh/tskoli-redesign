

import { useState, useEffect, useContext } from 'react';
import './ModulesPage.scss'
import api from '../../utils/api'
import { ModuleToDisplay } from "../../App";
import ModuleStatusBar from "../../components/ModuleStatusBar/moduleStatusBar";
import sortModulesAndReturns from '../../utils/sortModulesAndReturns';

const ModulesPage = () => {
    // using context to pass down state 
    const {displayModule, setDisplayModule} = useContext(ModuleToDisplay)
    const [guides, setGuides] = useState([]);
    const [myAssignments, setMyAssignments] = useState([])
    const [countModules, setCountModules] = useState({})
    const [loading,setLoading] = useState (true)

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

    console.log(myAssignments)
    // initialise modules variable and use it in sorModulesAndReturns to count guides
    
    const modules = {}
    useEffect(() => {
      // function that organizes modules, guides and number of returns
      sortModulesAndReturns(guides, myAssignments, modules, setLoading, setCountModules)

    
      }, [guides, myAssignments]);
      
 
   
     

    return (
        <>
        {loading ? (<p>Loading...</p>) : 
        (<>
         <section className="modules-container">
          <h1 className='modules-header'>{"{ Modules }"}</h1>
        <ModuleStatusBar
        countModules={countModules}
        setDisplayModule={displayModule}/>
        </section>
        </>)}
       
   
        </>
    )
}



export default ModulesPage;