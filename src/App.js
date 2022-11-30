
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import ModulesPage from './components/ModulesPage/ModulesPage';
import { useState, createContext } from 'react';
import { AuthProvider } from "./utils/authContext";
import './App.css';
import Calendar from 'react-calendar';
import EachModulepage from  './components/EachModulepage/eachModulePage';
import Calendarpage from './components/Calendarpage/calendarpage';
import GuidePage from './components/GuidePage/guidePage';
import MyReturns from './components/MyReturnspage/myReturns';
import Loginpage from './components/Loginpage/logIn';
import Dashboard from './components/Dashboard/dashboard';

import RouterComponet from './Router/Router';

export const ModuleToDisplay = createContext()

function App() {

  const [displayModule, setDisplayModule] = useState(0)

  return (
  
      <div className="App">
       <ModuleToDisplay.Provider value={{displayModule, setDisplayModule}}>
         <AuthProvider>
          <RouterComponet/>
          </AuthProvider>
          </ModuleToDisplay.Provider>
      </div>
  );
}

export default App;
