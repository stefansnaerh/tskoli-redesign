





const sortModulesAndReturns = (newModules, count, newReturns, setLoading, newReviews, numberOfGuides ) => {
    let order = {}
    let ordered = {}


    for (const element of newModules){
      if (count[element.title]){
          count[element.title].ids.push(element.id)
        if(count[element.title]){
        count[element.title].name.push(element.guideTitle)
        }
      } else {
          count[element.title] = {ids:[element.id],name:[element.guideTitle], isReturned: [], isReviewed: [], grade: []}
      }
      if (newReturns.includes(element.id)){
          count[element.title].isReturned.push(true)
      }
      else {
        count[element.title].isReturned.push(false)
      }
      if (newReviews.some(e => e.assignment === element.id)){
        count[element.title].isReviewed.push(true)
        // það eru bara 7 element i newReviews.. þarf að bera það saman við id
        count[element.title].grade.push(newReviews[0].grade)
      }
      else {
        count[element.title].isReviewed.push(false)
        count[element.title].grade.push(0)
      }

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