import React from 'react';
import ToDo from "./ToDo";

 
const ToDoListOne = ({toDoList, handleToggle, handleFilter}) => {
    
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
               )
           })}
           <button className='todobutton' style={{margin: '20px'}} onClick={handleFilter}>CLEAR COMPLETED</button>
       </div>
   );

}

export default ToDoListOne;