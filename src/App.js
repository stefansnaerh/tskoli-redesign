
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile'
import ModulesPage from './components/ModulesPage/ModulesPage';
import { useState } from 'react';
import { AuthProvider } from "./utils/authContext";
import './App.css';
import Calendar from 'react-calendar';

function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Navbar/>
        <ModulesPage/>
     </AuthProvider>
    </div>
  );
}

export default App;
