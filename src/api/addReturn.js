import { useState } from "react";
import api from '../utils/api';

const AddReturn = ()=>{
  const [comment, setComment] = useState("");
  const [imageOrGif, setImageOrGif] = useState("");
  const [liveVersion, setLiveVersion] = useState("");
  const [url, setUrl] = useState("")

  const addReturn = ()=>{

    const project = {
      //createdAt and updatedAt are done by the server so don't worry about them
      //isPicked is not used anymore so you can skip it
      //coAuthors is an array of students who did the assignment with you (it is nice to be able to do group working guides but maybe not in your scope?)
      comment,
      imageOrGif,
      liveVersion,
      url,
      assignmentId:"5f13205ab279dc27c467ca56", //you need to set the assignment of the guide you are trying to return
      coAuthors: "[]"
    }
    api.post("/assignmentReturns",project)
  }
  return (<>
    comment:     <input type="text" placeholder="comment" onChange={(e)=>setComment(e.target.value)} value={comment}></input>
    imageOrGif:  <input type="text" placeholder="imageOrGif" onChange={(e)=>setImageOrGif(e.target.value)} value={imageOrGif}></input>
    liveVersion: <input type="text" placeholder="liveversion" onChange={(e)=>setLiveVersion(e.target.value)} value={liveVersion}></input>
    url:         <input type="text" placeholder="url" onChange={(e)=>setUrl(e.target.value)} value={url}></input>  
    <button onClick={addReturn}>submit</button>
  </>)
}

export default AddReturn;