
import { useState, useEffect } from 'react';
import './ModulesPage.scss'
import api from '../../utils/api'


const ModulesPage = () => {

    const [guides, setGuides] = useState([]);
    const [myAssignemnts, setMyAssignments] = useState([])


    const [loading,setLoading] = useState (true)
    const [modules, setModules] = useState([])
    const [countModules, setCountModules] = useState({})
    // bera saman id við assignment inni i myassignemnt
    useEffect(()=>{
      const getGuides = async ()=>{
        const g = await api.get('/guides');
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
            title: guide.project.Title,
            id: guide._id,
         }
       });
       console.log(newModules)

       const newReturns = myAssignemnts.map(assignment => {
        return assignment.assignment}
    )
    console.log(newReturns)
       // count how many guides under each module
       for (const element of newModules){
        if (count[element.title]){
            count[element.title].ids.push(element.id)
        } else {
            count[element.title] = {ids:[element.id], completed: 0}
        }
        if (newReturns.includes(element.id)){
            count[element.title].completed++
        }

        console.log(count)
        // sort the guides title so they appear in right order
        const ordered = Object.keys(count).sort().reduce(
            (obj, key) => { 
              obj[key] = count[key]; 
              return obj;
            }, 
            {}
          );  
          //updating state with the sorted modules and number of guides in each module
          console.log(ordered)
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
          console.log(100 - percentage)
          console.log(percentage)
            return (
                <>
                <div className='module-info-container'>
                    <h1 className='module' key={index}>Module {key}</h1>
                    <div className='module-statistics'>
                        <h1>{Object.values(countModules)[index].completed}/</h1>
                        <h1>{Object.values(countModules)[index].ids.length}</h1>
                    </div>
                </div>
                <div className='progress-bar-container'>
                <div className='progress-bar-finished' style={{"background": `#B5E2A8`, "width":`${percentage}%`}}></div>
                <div className='progress-bar-left'></div>
                </div>
                </>
            )
        })}
        </>)}
        </section>
   
        </>
    )
}



export default ModulesPage