import React from 'react';
import ToDo from "./ToDo";
import { motion } from 'framer-motion'; 
import '../ToDoList/todo.scss';

 
const ToDoListOne = ({toDoList, handleToggle, handleFilter}) => {

   return (
       <>
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
               )
           })}
        </div>
        <button className='todobutton' onClick={handleFilter}>CLEAR</button>
   </>
   );

}

export default ToDoListOne;