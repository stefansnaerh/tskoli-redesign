





const sortModulesAndReturns = (newModules, count, newReturns, setLoading, newReviews ) => {
    let order = {}
    let ordered = {}

    for (const element of newModules){
      if (count[element.title]){
          count[element.title].ids.push(element.id)
        if(count[element.title]){
        count[element.title].name.push(element.guideTitle)
        }
      } else {
          count[element.title] = {ids:[element.id],name:[element.guideTitle], isReturned: []}
      }
      if (newReturns.includes(element.id)){
          count[element.title].isReturned.push(true)
      }
      else {
        count[element.title].isReturned.push(false)
      }
      console.log(count)
      // sort the guides title so they appear in right order
      ordered = Object.keys(count).sort().reduce(
          (obj, key) => { 
            obj[key] = count[key]; 
            return obj;
          }, 
          {}
        );  
        // get the name of module
        order = Object.keys(count).sort()
        setLoading(false)
        //setCurrentModule(order[3])
        //updating state with the sorted modules and number of guides in each module
      //setCurrentGuides(Object.values(ordered)[3])
     }
     return {
      order,
      ordered
     }
  }


  export default sortModulesAndReturns