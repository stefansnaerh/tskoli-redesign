import { useState, useEffect } from "react"
import './Gallery.scss';
import Project from  './project' ;
import {motion} from "framer-motion"
import { Link } from "react-router-dom"
import WellDoneModal from "../WellDoneModal/wellDoneModal";

const Gallery = ()=>{

    const [projects, setProjects] = useState([]);
    const [modules, setModules] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    
    //Using useEffect here so the code only runs once. I'm using async and await so I can allow the whole page to load even if it takes more time to load the API data
    useEffect(() =>{
      const getData = async ()=> {
        //fetching the API here
        const gallery = await fetch ("https://tskoli-intranet-api-h7.vercel.app/api/V1/gallery")
        const data = await gallery.json();
        setProjects(data);
        setFilteredProjects(data);
        }
        getData();

    },[]);

//Made an array to filter out the projects so the button works to filter out guides from modules
    const selectModule = (e) => {
        const filterarray = projects.filter(project => {
            return (project.assignment.project.Title === e.target.value)
        })
        setFilteredProjects(filterarray)
    }
  
  return (
    

    <div className="main-gallery-container">
        <div className="topcontainer">
            <div className="gallerytxt">
                <h1 className="gallerytxt">{"{ Gallery }"}</h1>
            </div>
            <div className="selectbutton">
                <select onChange={selectModule} className="dropbtn">
                    <option className="dropdown" value="" selected disabled hidden>Choose Module</option>
                    {modules.map(module => <option value={module}>Module {module[0]}</option>)}
                </select>
            </div>
         </div> 
      <div className="gallery-container">
       
        {filteredProjects.map(project=>{
                if(!modules.includes(project.assignment.project.Title)) {
                    setModules([...modules, project.assignment.project.Title])
                }
        return (
           <Project project={project}>
           </Project>
        )
       })}
      </div>
      </div>
  );
}

export default Gallery;