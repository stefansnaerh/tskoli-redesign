import { useState, useEffect, useContext } from 'react';
import './insidereviewPage.scss';
import api from '../../utils/api';
import { Link, useParams } from 'react-router-dom';
import GetReturns from '../getReturns';
import { useAuth } from '../../utils/authContext';















// when submitting the review, we need to call api.patch(`/reviews/${reviewId}`,{vote, feedback})
// then i call this api.patch


const InsidereviewPage = () => {
const params = useParams ()
//console.log(params)
const [feedback, setFeedback] = useState('');
const [vote, setVote] = useState('')


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
        <div className='all-section'>

            <section className='return-container'>
                <div className='inside-return'>
                    <p className='header-text'>Return Details:</p>
                        <p href = {``} className='return'>
                            <h1>Module {project.project[0]}</h1>
                            <p>{project.guide}</p> 
                        </p>
                        <br />    
                        <p href = {``} className='return'>
                            <h1>Return date</h1>
                            <p>{returns.createdAt}</p> 
                        </p>
                        <br />  
                        <a href = {returns.url} className='return'>
                            <h1>URL</h1>
                            <p>{returns.url}</p> 
                        </a>
                        <br />  
                        <a href = {returns.liveVersion} className='return'>
                            <h1>Live Version</h1>
                            <p>{returns.liveVersion}</p> 
                        </a>
                        <br />  
                        <a href = {``} className='return'>
                            <h1>Comment</h1>
                            <p>{returns.comment}</p> 
                        </a>
                        <br />  
                        <p className='return-image'>
                            <h1>Image</h1>
                            <img src={returns.imageOrGif} /> 
                        </p>
                </div>
             </section>


             <section className='review-container'>
                <div className='inside-review'>
                    <p className='header-text'>Review</p>
                    <p className='in-review'>Requirement to Pass</p>
                    <p>{project.knowledge}</p>
                    <p>{project.skills}</p>
                    <p className='in-review'>Your Feedback</p>
                    <ul>
                        <li>How can this work be improved/fixed?</li>
                        <li>What was inpiring about it?</li>
                    </ul>
                    <p className='in-review'>Vote</p>
                
                        <div className='round'>
                            <input type="radio" name='vote'/>
                            <p>Pass and Recommended to Gallery ( shows good knpwledge and skills)</p>
                        </div>
        

                   
                        <div className='round'>
                            <input type="radio" name='vote'/>
                        <p>Pass (shows knowledge and skills)</p>   
                        </div>
                   

                    
                        <div className='round'>
                            <input type="radio" name='vote'  />
                            <p>No pass (It is broken/unavailable or does not show knowledge and skills)</p>   
                        </div>
                
                    
                    <label for="text"></label>
                    <textarea name="" ></textarea>
                    <button onClick={() => api.patch(`/reviews/${reviewId}`,{vote, feedback})}>RETURN</button>  
                </div>
             </section>
        </div>
   
        </>
    










     );
}
 
export default InsidereviewPage;