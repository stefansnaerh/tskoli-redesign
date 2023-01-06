





const sortModulesAndReviews = (newModules, count, newReturns, setLoading, newReviews ) => {
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
      const review = newReviews.find(e => e.assignment === element.id)
      if (review){
        count[element.title].isReviewed.push(true)
        count[element.title].grade.push(review.grade)
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
     }
     return {
      order,
      ordered
     }
    
  }


  export default sortModulesAndReviews