
import {useEffect, useState} from 'react';
import api from '../utils/api'
import { useAuth } from '../utils/authContext';

function GetReviews() {
  const {login} = useAuth();
  const [reviews, setReviews] = useState([]);
  useEffect(()=>{
    const getReviews = async ()=>{
      await login({email:"test3@test.is", password:"123456"})
      const g = await api.get('/reviews');
      setReviews(g)
    }
    getReviews();
  },[login])
  console.log(reviews)
  return (
    <div className="App">
      getting reviews
    </div>
  );
}

export default GetReviews;