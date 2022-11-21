import GetGuides from './components/getGuides';
import GetReturns from './components/getReturns';
import GetReviews from './components/getReviews';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile'

import { AuthProvider } from "./utils/authContext";
import './App.css';

function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Navbar/>
<<<<<<< HEAD
        <Profile />
      <GetGuides></GetGuides>
       <GetReturns></GetReturns> 
       <GetReviews></GetReviews> 
=======
>>>>>>> b7112519a3098459a4eba6dbdbfa85a93b4bc65c
     </AuthProvider>
    </div>
  );
}

export default App;
