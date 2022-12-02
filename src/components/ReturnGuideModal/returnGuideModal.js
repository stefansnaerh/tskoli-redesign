
import { useState } from 'react';
import './returnGuideModal.scss';



const ReturnGuideModal = (props) => {
    const [cancelDisplay, setCancelDisplay] = useState("inital")

    return (
     <section className='return-guide-modal-container' style={{display: {cancelDisplay}}}>
        <form>
        <label htmlFor="code">Code/ Design URL (Give access to your code and/or design files)</label>
          <input type="text" name='code' placeholder='Ex.: https://github.com/vefthroun-2020/guides'></input>
        <label htmlFor="live-version">Live Version URL (Give access to your live version)</label>
          <input type="text" name='live-version' placeholder='Ex.: https://io.tskoli.dev'></input>
        <label htmlFor="project-image">Link pictures (An Image or Gif for your project)</label>
          <input type="text" name="project-image" placeholder='Ex.: https://github.com/glassipel/picture/blob/images/hello.png'></input>
        <label htmlFor="project-name">Your project name (max 35 characters)</label>
          <input className='project-name' name='project-name'></input>
        <label htmlFor="project-comment">Comment (max 500 characters)</label>
          <textarea name="project-comment"></textarea>
          <button className='submit-btn' type='submit'>RETURN</button>
          <button onClick={() => setCancelDisplay("none")} className='cancel-btn'>Cancel</button>
        </form>
     </section>
    )
  }


  export default ReturnGuideModal
  