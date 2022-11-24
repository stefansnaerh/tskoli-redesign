
import './eachModulePage.scss';
import { useState, useEffect } from 'react';
import api from '../../utils/api'


const EachModulepage = () => {


    const [guides, setGuides] = useState([]);
    const [myAssignemnts, setMyAssignments] = useState([])
    const [modules, setModules] = useState([])
    const [countModules, setCountModules] = useState({})

    const [loading,setLoading] = useState (true)

    useEffect(()=>{
        const getGuides = async ()=>{
          const g = await api.get('/guides');
          const a = await api.get('/assignmentreturns')
          // filter away hidden guides and update to state
          setGuides(g.data.filter(g => !g.hidden))
          setMyAssignments(a.data)
         
        }
        getGuides();
        console.log(guides)
      },[])
      const count = {}
      useEffect(() => {
          //map through guides and make objects with module name and guide id's under each module
         const newModules = guides.map(guide => {
           return {
              title: guide.project.Title,
              id: guide._id,
              guideTitle: guide.Title
           }
         });
      
  
         const newReturns = myAssignemnts.map(assignment => {
          return assignment.assignment}
      )
         // count how many guides under each module
         for (const element of newModules){
          if (count[element.title]){
              count[element.title].ids.push(element.id)
            if(count[element.title]){
            count[element.title].name.push(element.guideTitle)
            }
          } else {
              count[element.title] = {ids:[element.id],name:[element.guideTitle], completed: 0}
          }
          if (newReturns.includes(element.id)){
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
          console.log(Object.values(countModules)[1])
          
          
         }
      }, [guides])


    return(
        <section className='guides-container'>
        <h1 className='guide-header'>Module 4 - Connecting to the world</h1>
        <div className='guide-btns-container'>
            <button href = "#" className='guides-btn'>Guides</button>
            <button href = "#" className='myreturn-btn'>My returns</button>
        </div>
        {Object.values(countModules).map((key, index) => {

            return (
                <><div className="guidenumber">
                <a className='guide-link' href="">
                    <h4>Guide 1</h4>
                    <p key={key}>{Object.values(countModules)[index].name}</p>
                </a>
            </div></>
            )
        } )}
        </section>
    )
};



export default EachModulepage;


