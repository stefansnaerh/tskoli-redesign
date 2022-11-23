
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile'
import ModulesPage from './components/ModulesPage/ModulesPage';
import { useState } from 'react';
import { AuthProvider } from "./utils/authContext";
import './App.css';
import Calendar from 'react-calendar';
import EachModulepage from  './components/EachModulepage/eachModulePage';
import Calendarpage from './components/Calendarpage/calendarpage';

function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Navbar />
        <Profile />
        <Calendarpage />
        <ModulesPage />
        
     </AuthProvider>
    </div>
  );
}

export default App;
