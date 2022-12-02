
import { useState, useContext } from 'react';
import './returnGuideModal.scss';
import api from '../../utils/api';
import { GuideToDisplay } from '../../App';

const ReturnGuideModal = (props) => {
    const [cancelDisplay, setCancelDisplay] = useState("inital")
    // getting the id of the guide
    const {displayGuide, setDisplayGuide} = useContext(GuideToDisplay)
    const [comment, setComment] = useState("");
    const [imageOrGif, setImageOrGif] = useState("");
    const [liveVersion, setLiveVersion] = useState("");
    const [url, setUrl] = useState("")
  

    const addReturn = (e) => {
     e.preventDefault()
    const project = {
        //createdAt and updatedAt are done by the server so don't worry about them
        //isPicked is not used anymore so you can skip it
        //coAuthors is an array of students who did the assignment with you (it is nice to be able to do group working guides but maybe not in your scope?)
        comment,
        imageOrGif,
        liveVersion,
        url,
        assignmentId:`${displayGuide}`, //you need to set the assignment of the guide you are trying to return
        coAuthors: "[]"
      }
      api.post("/assignmentReturns",project)
    }
    return (
     <section className='return-guide-modal-container' style={{display: {cancelDisplay}}}>
        <form>
        <label htmlFor="code">Code/ Design URL (Give access to your code and/or design files)</label>
          <input type="text" name='code' onChange={(e)=>setUrl(e.target.value)} value={url} placeholder='Ex.: https://github.com/vefthroun-2020/guides'></input>
        <label htmlFor="live-version">Live Version URL (Give access to your live version)</label>
          <input type="text" name='live-version' onChange={(e)=>setLiveVersion(e.target.value)} value={liveVersion} placeholder='Ex.: https://io.tskoli.dev'></input>
        <label htmlFor="project-image">Link pictures (An Image or Gif for your project)</label>
          <input type="text" name="project-image"  onChange={(e)=>setImageOrGif(e.target.value)} value={imageOrGif} placeholder='Ex.: https://github.com/glassipel/picture/blob/images/hello.png'></input>
        <label htmlFor="project-name">Your project name (max 35 characters)</label>
          <input className='project-name' name='project-name'></input>
        <label htmlFor="project-comment">Comment (max 500 characters)</label>
          <input name="project-comment"onChange={(e)=>setComment(e.target.value)} value={comment}></input>
          <button className='submit-btn' onClick={addReturn}>RETURN</button>
          <button onClick={() => setCancelDisplay("none")} className='cancel-btn'>Cancel</button>
          </form>
     </section>
    )
  }


  export default ReturnGuideModal
  