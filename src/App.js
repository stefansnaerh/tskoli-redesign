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
     </AuthProvider>
    </div>
  );
}

export default App;
