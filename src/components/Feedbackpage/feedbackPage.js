import { useState, useEffect, useRef } from 'react';
import './feedbackPage.scss';
import api from '../../utils/api';
import { Link, useParams } from 'react-router-dom';
import GetReturns from  "../../api/getReturns";
import { useAuth } from '../../utils/authContext';








const Feedbackpage = () => {
    const params = useParams ()
//console.log(params)

    const [meaningPopup, setMeaningPopup] = useState(false);
    const meaningRef = useRef();


    const {login} = useAuth();
    const [returns, setReturns] = useState([]);
    const [project, setProject] = useState({project:[]});
    const [reviewId, setReviewId] = useState('')
    useEffect(()=>{
      const getReturns = async ()=>{
        //await login({email:"test3@test.is", password:"123456"})
        const g = await api.post(`/reviews`, {assignmentId:params.returnId});
        const reviewId = g.data.data.reviewId
        setReviewId(reviewId)
        const r = await api.get(`/reviews/${reviewId}`)
        console.log(r.data)
        setReturns (r.data.assignmentReturn)
       setProject (r.data.assignment)
      }
      getReturns();
    },[])
    console.log(project)








    return (  
        <>
        <div className='whole-page'>

            <h1>Module {project.project[0]}</h1>
            <p>{project.guide}</p>
            <div className='result'>
            <input type="radio" name='vote'/>
            <p>Pass and Recommended</p>
            </div>
        <div className='mainn-section'>

        <section className=''>
            <div className=''>
                      
                    <p href = {``} className='grade'>
                        <h1>Return date</h1>
                        <p>{returns.createdAt}</p> 
                    </p>
                    <br />  
                    <a href = {returns.url} className='grade'>
                        <h1>URL</h1>
                        <p>{returns.url}</p> 
                    </a>
                    <br />  
                    <a href = {returns.liveVersion} className='grade'>
                        <h1>Live Version</h1>
                        <p>{returns.liveVersion}</p> 
                    </a>
                    <br />  
                    <a href = {``} className='grade'>
                        <h1>Comment</h1>
                        <p>{returns.comment}</p> 
                    </a>
                    <br />  
                    <p className='feedback-image'>
                        <h1>Image</h1>
                        <img src={returns.imageOrGif} /> 
                    </p>
            </div>
         </section>


         <section className='feedback-container'>
            <div className='inside-feedback'>
                <h4>Feedback</h4>
                <p>WOW!! Amazing design, good job You really know Figma well. </p>
 
            </div>
            <div className='feedback-grade'>
            <h3>Grade this feeback:</h3>
            </div>
            <div>
                <input type="range" min='0' max='10' step='1'></input>
            </div>
            <p onClick={() => setMeaningPopup(true)} className="change-color">What do these numbers mean?</p>
         </section>
    </div>
 </div>
    <div style={{display:meaningPopup?'block':'none'}} className='grade-meaning' ref={meaningRef}>
        <p>0-2: The Review was rude or disrespectful, or no useful comments were made.</p>
        <p>3-4: The Review is too vague or generic, not really mentioning your work.</p>   
        <p>5-6: The Review shows knowledge of your work but does not contribute much to improvements.</p>
        <p>7-8: The Review is precise/specific when talking about your work, indicating ways you could improve.</p>
        <p>9-10: The Review describes in detail different ways your work could be improved,<br />
          including valuable information like resources you might want to know about.</p>
    </div>
    </>
    );
}
 
export default Feedbackpage;