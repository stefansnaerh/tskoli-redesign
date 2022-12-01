

import { useState, createContext } from 'react';
import { AuthProvider } from "./utils/authContext";
import './App.css';


import RouterComponet from './Router/Router';

export const ModuleToDisplay = createContext()
export const GuideToDisplay = createContext()

function App() {

  const [displayModule, setDisplayModule] = useState(0)
  const [displayGuide, setDisplayGuide] = useState("")

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
