import { Link } from "react-router-dom";
import { ModuleToDisplay } from "../../App";

import { useContext } from "react";


const ModuleStatusBar = ({countModules}) => {
  const { displayModule, setDisplayModule } = useContext(ModuleToDisplay);
    return (
          <>
            {Object.keys(countModules).map((key, index) => {
              const percentage = Math.round(
                (Object.values(countModules)[index].completed /
                  Object.values(countModules)[index].ids.length) *
                  100
              );
              return (
                <>
                <div className="module-wrapper">
                  <div className="module-info-container">
                    <Link aria-label={`link to module ${index}`}
                      onClick={() => setDisplayModule(index)}
                      to="/modules"
                      className="link"
                    >
                      <h1 className="module" key={index}>
                        Module {key.slice(0, 2)}
                      </h1>
                    </Link>
                    <div className="module-statistics">
                      <h1 aria-label="number of guides finished in module">
                        {Object.values(countModules)[index].completed}/
                      </h1>
                      <h1 aria-label="number of guides in module">
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
    )
}

export default ModuleStatusBar