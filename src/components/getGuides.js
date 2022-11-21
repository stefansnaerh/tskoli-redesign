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
  console.log(guides)

  return (
    <>
    {loading ? (<p>loading</p>) 
    : (<div className="App">
        {guides.sort((a, b) => (a.order > b.order ? 1 : -1)).map(guide => (
        <h1>{guide.Title}</h1>
          ) )} 
      </div> )}
         </>
  );
}


/*return (
  <>
  {loading ? (<p>loading</p>) 
  : (<div className="App">
      {guides.sort((a, b) => (a.order > b.order ? 1 : -1)).map(guide => (
      <h1>{guide.Title}</h1>
        ) )} 
    </div> )}
       </>
);
}
*/

export default GetGuides;