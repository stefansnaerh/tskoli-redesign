import {useEffect, useState} from 'react';
import api from '../utils/api'
import { useAuth } from '../utils/authContext';

function GetReturns() {
  const {login} = useAuth();
  const [returns, setReturns] = useState([]);
  useEffect(()=>{
    const getReturns = async ()=>{
      await login({email:"test3@test.is", password:"123456"})
      const g = await api.get('/assignmentReturns');
      setReturns(g)
    }
    getReturns();
  },[])
  console.log(returns)
  return (
    <div className="App">
      getting returns
    </div>
  );
}

export default GetReturns;