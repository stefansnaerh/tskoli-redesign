
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile'
import ModulesPage from './components/ModulesPage/ModulesPage';
import { useState } from 'react';
import { AuthProvider } from "./utils/authContext";
import './App.css';
import Calendar from 'react-calendar';
import EachModulepage from  './components/EachModulepage/eachModulePage';
import Calendarpage from './components/Calendarpage/calendarpage';
import GuidePage from './components/GuidePage/guidePage';
import MyReturns from './components/MyReturnspage/myReturns';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginpage from './components/Loginpage/logIn';





function App() {
  return (

    <Router>

      <div className="App">
         <AuthProvider>
          <Navbar /> 
          <div className='content'>
          <MyReturns/>
            <Switch>
            
              <Route exact path='/loginpage'><Loginpage /></Route>

              <Route exact path='/calendarpage'>
               <Calendarpage />
              </Route>
            </Switch>

          </div>
 
            </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
