
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

import RouterComponet from './Router/Router';


function App() {
  return (
      <div className="App">
         <AuthProvider/>
          <RouterComponet/>
      </div>
  );
}

export default App;
