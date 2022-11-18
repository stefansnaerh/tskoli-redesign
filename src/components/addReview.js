import { useState } from "react";
import api from '../utils/api';

const AddReview = ()=>{
  const [feedback, setFeedback] = useState("");
  const [vote, setVote] = useState("");

  const addReview = async()=>{//handle errors so that people can't submit empty reviews
    const assignmentId = "5f13205ab279dc27c467ca56"; //you need to set the assignment of the guide you are trying to review 
    const reviewId = await api.post("/reviews",{assignmentId});
    console.log(reviewId.data.data)
    await api.patch(`/reviews/${reviewId.data.data.reviewId}`, {feedback,vote});
  }
  return (<>
    feedback:    <input type="text" placeholder="feedback" onChange={(e)=>setFeedback(e.target.value)} value={feedback}></input>
    Pass:        
    <input type="radio" name="vote" onChange={(e)=>setVote(e.target.value)} value="pass"></input>
    Pass and Recommend to Gallery             
    <input type="radio" name="vote" onChange={(e)=>setVote(e.target.value)} value="recommend"></input>
    Fail! Looser!!
    <input type="radio" name="vote" onChange={(e)=>setVote(e.target.value)} value="no-pass"></input>
    <button onClick={addReview}>submit</button>
  </>)
}

export default AddReview;