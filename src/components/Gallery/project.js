import { useState } from "react";
import './Gallery.scss'

const Project = ({project}) => {

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    
    //The image that appears when there's no image or error with the image 
  const skipImage = (e)=>{
    e.target.src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }

    return (
        <>
        {/* Hovereffect over the images so text appears */}
        <div key={project._id} className="project">

            <div className="image"onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img onError={skipImage} className="image" src={project.imageOrGif}></img>
            </div>
            
            {isHovering && (
                    <p className="name">{project.sender.name}</p>        
                )}
         </div>
    </>
    )
}

export default Project;