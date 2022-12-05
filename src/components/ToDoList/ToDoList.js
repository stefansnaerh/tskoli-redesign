import React from 'react';
import ToDo from "./ToDo";
import { motion } from 'framer-motion'; 
import '../ToDoList/todo.scss';

 
const ToDoListOne = ({toDoList, handleToggle, handleFilter}) => {

   return (
       <div>
            <div>
                {toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    )
            })}
            </div>
                <div>
                <motion.button className='todobutton' onClick={handleFilter}>CLEAR</motion.button>
            </div>
        </div>
   );

}

export default ToDoListOne;