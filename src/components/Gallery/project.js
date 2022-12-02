import { useState } from "react";
import './Gallery.scss'
import {motion} from "framer-motion"

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
  };

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

    return (
        <>
        {/* Hovereffect over the images so text appears */}
        <div key={project._id} className="project">
            <div className="image"onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <motion.img onError={skipImage} onClick={()=> openInNewTab (project.url)} className="image" src={project.imageOrGif}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9}}>
                </motion.img>
            </div>
            {isHovering && (
                <div className="projectinfo">
                    <p className="projecttitle">{project.assignment.Title}</p>
                    <p className="studentname">{project.sender.name}</p> 
                </div>       
                )}  
         </div>
    </>
    )
}

export default Project;