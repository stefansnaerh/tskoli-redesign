
import { useState, useEffect } from "react";
import api from "../../utils/api";
import ToDoList from '../../components/ToDoList/todolistneedbettername';
import ToDoListOne from "../../components/ToDoList/ToDoList";
import ToDoForm from "../../components/ToDoList/ToDoForm";
import ModuleStatusBar from "../../components/ModuleStatusBar/moduleStatusBar";
import sortModulesAndReturns from "../../utils/sortModulesAndReturns";
import CourceGraph from "../../components/CourceStatusGraph/courceGraph";
import Sidebar from "../../components/Sidebar/sidebar"

import "./mainPage.scss";


const MainPage = () => {
  const [guides, setGuides] = useState([]);
  const [myAssignemnts, setMyAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countModules, setCountModules] = useState({});
  const localList= JSON.parse(localStorage.getItem("todolist"));
  const [ toDoList, setToDoList ] = useState(localList || []);

  const [sumOfReturns, setSumOfReturns] = useState(0)
  // toggle for the todolist
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  // clear button for the todolist
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  // add button for the todolist
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(toDoList))
  },[toDoList]
 )

  useEffect(() => {
    const getGuides = async () => {
      const g = await api.get("/guides");
      const a = await api.get("/assignmentreturns");
      // filter away hidden guides and update to state
      setGuides(g.data.filter((g) => !g.hidden));
      if(a.data.length) setMyAssignments(a.data);
    };
    getGuides();
  }, []);
 // initialise modules variable and use it in sorModulesAndReturns to count guides
  const modules = {};
  useEffect(() => {
    // function that organizes modules, guides and number of returns
    sortModulesAndReturns(guides, myAssignemnts, modules, setLoading, setCountModules)

    // counting sum of returns and storing it in state
    const numberOfReturns = Object.values(countModules).reduce((total, current) => 
    total + current.completed, 0)
    setSumOfReturns(numberOfReturns)
    
  }, [guides]);

  // counting number of guides
  let numberOfGuides = 0
  for (let i = 0; i < guides.length; i++){
   numberOfGuides++
  }
  //getting percentage of done guides
  const percentageOfDone =  sumOfReturns / numberOfGuides

  return (
    <>
    {window.screen.width > 768 ?
    <div className="dashboard">
      <h1 className="welcome-back">Welcome Back!</h1>
      <div className="status-bar">
          <h1 className="status-header">Status</h1>
          {loading ? (
          <p>Loading...</p>
        ) : (
          <>
          <section className="status-container">
         <ModuleStatusBar
         countModules = {countModules}
          />
          </section>
         </>)}
        </div>
        <div className="todolist-container">
        <ToDoList/>
          <div aria-label="to do list" className="toDoListBox">
            <div className="toDoListOneDashboard"> <ToDoListOne toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/></div>
            <div className="toDoListFormDashboard"><ToDoForm addTask={addTask}/></div>
          </div>
        </div>
        <CourceGraph
        percentageOfDone = {percentageOfDone}/>
    </div>
    : <Sidebar/>}
    </>
  );
};

export default MainPage