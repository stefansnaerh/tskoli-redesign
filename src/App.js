import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import ModulesPage from "./components/ModulesPage/ModulesPage";
import { useState, createContext, useEffect } from "react";
import { AuthProvider } from "./utils/authContext";
import "./App.css";
import Calendar from "react-calendar";
import EachModulepage from "./components/EachModulepage/eachModulePage";
import Calendarpage from "./components/Calendarpage/calendarpage";
import GuidePage from "./components/GuidePage/guidePage";
import MyReturns from "./components/MyReturnspage/myReturns";
import Loginpage from "./components/Loginpage/logIn";


import RouterComponet from "./Router/Router";

export const ModuleToDisplay = createContext()
export const GuideToDisplay = createContext()

function App() {
  const lastGuideData = window.localStorage.getItem("GUIDE-ID")
  const [displayModule, setDisplayModule] = useState(0)
  const [displayGuide, setDisplayGuide] = useState(lastGuideData ? JSON.parse(lastGuideData).displayGuide: null)

  return (
      <div className="App">
       <ModuleToDisplay.Provider value={{displayModule, setDisplayModule}}>
        <GuideToDisplay.Provider value={{displayGuide, setDisplayGuide}}>
         <AuthProvider>
          <RouterComponet/>
          </AuthProvider>
          </GuideToDisplay.Provider>
          </ModuleToDisplay.Provider>
      </div>
  );
}

export default App;
