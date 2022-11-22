
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
    console.log(guides)

    //Búa til object með project title, hversu mörg guides eru með það og hversu mörg guide user er buinn með
    
    // ná öllum guides.project.Title
    // ná hversu margir modules eru með það Title
    // ná hvað marga guide-a user er búinn með
    const count = {}
    useEffect(() => {
        //map through guides and make new array with only module title
       const newModules = guides.map(guide => {
         return guide.project.Title
       });
       console.log(newModules)
       for (const element of newModules){
        if (count[element]){
            count[element] += 1;
        } else {
            count[element] = 1;
        }
       
        setCountModules(count)
        console.log(countModules)
        setLoading(false)
       }
       //remove other module title instances from new array
       /*let uniqueModules = [...new Set(newModules)];
       setModules(uniqueModules);
       setLoading(false);*/

    }, [guides])

    console.log(modules)

   
  
    return (
        <>
      <section>
        {loading ? (<p>Loading...</p>) : 
        (<>
        {Object.keys(countModules).sort((a, b) => (a > b ? 1 : -1 )).map((key, index) => {
            return (
                <>
                <h1 key={index}>{key}</h1>
                <p>{Object.values(countModules)[index]}</p>
                </>
            )
        })}
        </>)}
      </section>
   
        </>
    )
}

/*  <section className='modules-container'>
        {loading ? (<p>Loading...</p>) :
        (<>
            {modules.sort((a, b) => (a > b ? 1 : -1)).map(m => {
              return (
                <div className='module-container'>
                <h2 className='module-name'>Module {m}</h2>
                <h2 className='project-count'></h2>
                <span className='progress-bar'></span>
                </div>
              )
            })}
        </>)
}
        </section>*/

export default ModulesPage