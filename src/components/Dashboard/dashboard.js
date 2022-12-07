import "./dashboard.scss";
import { useState, useEffect, useContext } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { ModuleToDisplay } from "../../App";
import ToDoList from './todolist';
import ToDoListOne from "../ToDoList/ToDoList";
import "./todolist.scss";
import ToDoForm from "../ToDoList/ToDoForm";
import { motion } from "framer-motion";

// Dashboard for homepage:
const Dashboard = () => {
  const { displayModule, setDisplayModule } = useContext(ModuleToDisplay);
  const [guides, setGuides] = useState([]);
  const [myAssignemnts, setMyAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modules, setModules] = useState([]);
  const [countModules, setCountModules] = useState({});
  const localList= JSON.parse(localStorage.getItem("todolist"));
  const [ toDoList, setToDoList ] = useState(localList || []);

  // toggle for the todolist
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
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

  // bera saman id við assignment inni i my assignment
  useEffect(() => {
    const getGuides = async () => {
      const g = await api.get("/guides");
      const a = await api.get("/assignmentreturns");
      // filter away hidden guides and update to state
      setGuides(g.data.filter((g) => !g.hidden));
      console.log(a);
      if(a.data.length) setMyAssignments(a.data);
    };
    getGuides();
  }, []);
  // initialise count variable and use it in line 36 to count guides
  const count = {};
  useEffect(() => {
    //map through guides and make objects with module name and guide id's under each module
    const newModules = guides.map((guide) => {
      return {
        title: guide.project.Title,
        id: guide._id,
      };
    });
    const newReturns = myAssignemnts.map((assignment) => {
      return assignment.assignment;
    });

    // count how many guides under each module
    for (const element of newModules) {
      if (count[element.title]) {
        count[element.title].ids.push(element.id);
      } else {
        count[element.title] = { ids: [element.id], completed: 0 };
      }
      if (newReturns.includes(element.id)) {
        count[element.title].completed++;
      }

      // sort the guides title so they appear in right order
      const ordered = Object.keys(count)
        .sort()
        .reduce((obj, key) => {
          obj[key] = count[key];
          return obj;
        }, {});
      //updating state with the sorted modules and number of guides in each module
      setCountModules(ordered);
      setLoading(false);
    }
  }, [guides]);

  return (
    <div className="dashboard">
      <h1 className="welcome-back">Welcome Back!</h1>
      <div className="status-bar">
        <div className="module-status-bars">
          <h1 className="status-header">Status</h1>
          <section className="status-container">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {Object.keys(countModules).map((key, index) => {
                  const percentage = Math.round(
                    (Object.values(countModules)[index].completed /
                      Object.values(countModules)[index].ids.length) *
                      100
                  );

                  // Má hunsa þetta. Þetta er það sem Stefán gerði til að láta upplýsingarnar koma rétt upp
                  return (
                    <>
                    <div className="module-wrapper">
                      <div className="module-info-container">
                        <Link
                          onClick={() => setDisplayModule(index)}
                          to="/modules"
                          className="link"
                        >
                          <h1 className="module" key={index}>
                            Module {key.slice(0, 2)}
                          </h1>
                        </Link>
                        <div className="module-statistics">
                          <h1>
                            {Object.values(countModules)[index].completed}/
                          </h1>
                          <h1>
                            {Object.values(countModules)[index].ids.length}
                          </h1>
                        </div>
                      </div>
                      <Link
                        onClick={() => setDisplayModule(index)}
                        to="/modules"
                        className="link"
                      >
                        <div className="progress-bar-container">
                          <div
                            className="progress-bar-finished"
                            style={{
                              background: `#B5E2A8`,
                              width: `${percentage}%`,
                            }}
                          ></div>
                          <div className="progress-bar-left"></div>
                        </div>
                      </Link>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </section>
        </div>
      </div>

      <div>
        <ToDoList/>
        <div className="toDoListBox">
          <div className="toDoListOneDashboard"> <ToDoListOne toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/></div>
          <div className="toDoListFormDashboard"><ToDoForm addTask={addTask}/></div>
        </div>
      </div>
      
    </div>
  );
};


export default Dashboard;