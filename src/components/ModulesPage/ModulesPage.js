
import { useState, useEffect } from 'react';
import './ModulesPage.scss'
import api from '../../utils/api'






const ModulesPage = () => {

    const [guides, setGuides] = useState([]);
    const [loading,setLoading] = useState (true)
    const [modules, setModules] = useState([])
    const [countModules, setCountModules] = useState({})

    useEffect(()=>{
      const getGuides = async ()=>{
        const g = await api.get('/guides');
        // filter away hidden guides and update to state
        setGuides(g.data.filter(g => !g.hidden))
      }
      getGuides();
      
    },[])
    // initialise count variable and use it in line 36 to count guides
    const count = {}
    useEffect(() => {
        //map through guides and make new array with only module title
       const newModules = guides.map(guide => {
         return guide.project.Title
       });
       console.log(newModules)
       // count how many guides have the same module title
       for (const element of newModules){
        if (count[element]){
            count[element] += 1;
        } else {
            count[element] = 1;
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
        console.log(countModules)
        setLoading(false)
       }
    }, [guides])

    console.log(modules)

   
  
    return (
        <>
      <section className='modules-container'>
        {loading ? (<p>Loading...</p>) : 
        (<>
         <h1 className='modules-header'>{"{ Modules }"}</h1>
        {Object.keys(countModules).map((key, index) => {
            return (
                <>
                <div className='module-info-container'>
                    <h1 key={index}>Module {key}</h1>
                    <h1>{Object.values(countModules)[index]}</h1>
                </div>
                <div className='progress-bar'></div>
                </>
            )
        })}
        </>)}
    </section>
   
        </>
    )
}



export default ModulesPage