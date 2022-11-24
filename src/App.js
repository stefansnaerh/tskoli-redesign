
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile'
import ModulesPage from './components/ModulesPage/ModulesPage';
import { useState } from 'react';
import { AuthProvider } from "./utils/authContext";
import './App.css';
import Calendar from 'react-calendar';
import EachModulepage from  './components/EachModulepage/eachModulePage';
import Calendarpage from './components/Calendarpage/calendarpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';






function App() {
  return (
    <Router>

      <div className="App">
         <AuthProvider>
          <Navbar />
         

          <div className='content'>
            <Switch>
            

              <Route exact path='/calendarpage'>
               <Calendarpage />
              </Route>
            </Switch>

          </div>
 
    <div className="App">
       <AuthProvider>
        <Navbar />
       <EachModulepage/>
        
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
