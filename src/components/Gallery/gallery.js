import { useState, useEffect } from "react"
import './Gallery.scss';

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

  const skipImage = (e)=>{
    e.target.src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
  
  return (
    
    <div className="main-container">
      {/* <p className="subheader">Projects from students 2022</p> */}
      <div className="gallery-container">

      <h1 className="gallerytxt">{"{ Gallery }"}</h1>

       {projects.map(project=>{
        return (
          <div className="innerclass" key={project._id}>
            <img onError={skipImage} className="image" src={project.imageOrGif}></img>
            <p className="name">{project.sender.name}</p>
          
          </div>
        )
       })}

      </div>
      </div>

    
  );
}

export default Gallery;