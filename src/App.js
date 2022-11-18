import GetGuides from './components/getGuides';
import GetReturns from './components/getReturns';
import GetReviews from './components/getReviews';

import { AuthProvider } from "./utils/authContext";
import './App.css';

function App() {
  return (
    <div className="App">
       <AuthProvider>
      <GetGuides></GetGuides>
       <GetReturns></GetReturns> 
       <GetReviews></GetReviews> 
     </AuthProvider>
    </div>
  );
}

export default App;
