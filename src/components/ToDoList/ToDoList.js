import React from 'react';
import ToDo from "./ToDo";
import { motion } from 'framer-motion'; 
import '../ToDoList/todo.scss';

 
const ToDoListOne = ({toDoList, handleToggle, handleFilter}) => {

   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
               )
           })}
           <motion.button className='todobutton' style={{margin: '20px'}} onClick={handleFilter}>CLEAR COMPLETED</motion.button>
       </div>
   );

}

export default ToDoListOne;