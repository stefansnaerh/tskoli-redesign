

const sortModulesAndReturns =( guides,myAssignemnts, modules, setLoading, setCountModules) => {

    const guidesModuleNames = guides.map((guide) => {
        return {
          moduleName: guide.project.Title,
          id: guide._id,
        };
      });
      const myReturns = myAssignemnts.map((assignment) => {
        return assignment.assignment;
      });

      //For of loop to build the count object so that it includes module name as properties
      // and each module name holds an object ids array and number of completed guides called completed  
    for (const guideModule of guidesModuleNames){      
      if (modules[guideModule.moduleName]){// if the module name exists in modules, add guide id to ids array
          modules[guideModule.moduleName].ids.push(guideModule.id)
      } else { // else create new object with guide ids and initialize completed with 0
          modules[guideModule.moduleName] = {ids:[guideModule.id], completed: 0}
      }
      if (myReturns.includes(guideModule.id)){ // if newreturns includes guide id add 1 completed to this module
          modules[guideModule.moduleName].completed++
      }
      // sort the guides title so they appear in right order
      const ordered = Object.keys(modules).sort().reduce(
        (obj, key) => { 
          obj[key] = modules[key]; 
          return obj;
        }, 
        {}
        );  
        //updating state with the sorted modules and number of guides in each module
        setCountModules(ordered)
        setLoading(false)
      }
  }

  export default sortModulesAndReturns