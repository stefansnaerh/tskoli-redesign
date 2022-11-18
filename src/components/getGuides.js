import {useEffect, useState} from 'react';
import api from '../utils/api'

function GetGuides() {

  const [guides, setGuides] = useState([]);
  const [loading,setLoading] = useState (true)
  useEffect(()=>{
    const getGuides = async ()=>{
      const g = await api.get('/guides');
      setGuides(g.data)
      setLoading(false)
    }
    getGuides();
  },[])
  console.log(guides[1])
  console.log(loading)

  return (
    <>
    {loading ? (<p>loading</p>) 
    : (<div className="App">
        {guides.map(guide => (
        <h1>{guide.Title}</h1>
          ) )} 
      </div> )}
         </>
  );
}

export default GetGuides;