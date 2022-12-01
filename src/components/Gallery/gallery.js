import { useState, useEffect } from "react"
import './Gallery.scss';
import Project from  './project' ;
import {motion} from "framer-motion"

const Gallery = ()=>{

    const [projects, setProjects] = useState([]);
    //Using useEffect here so the code only runs once. I'm using async and await so I can allow the whole page to load even if it takes more time to load the API data
    useEffect(() =>{
      const getData = async ()=> {
        //fetching the API here
      const gallery = await fetch ("https://tskoli-intranet-api-h7.vercel.app/api/V1/gallery")
      const data = await gallery.json();
      console.log(data)
      setProjects(data)
    }
    getData();
  },[])

  
  return (
    
    <div className="main-container">
         <div className="gallerytxt">
      <h1 className="gallerytxt">{"{ Gallery }"}</h1>
        </div>
      {/* <p className="subheader">Projects from students 2022</p> */}
      <div className="gallery-container">
       
       {projects.map(project=>{
 
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