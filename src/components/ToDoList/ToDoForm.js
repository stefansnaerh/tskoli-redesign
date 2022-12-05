import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../ToDoList/todo.scss';


const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <motion.form className='list-form'
         onSubmit={handleSubmit}
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         transition={{ duration: 1 }}
         >
            <div className='formstyle'>
                <motion.input className='todoform' value={userInput} type="text" onChange={handleChange} placeholder="To do...."/>
                <motion.button className='todoformbutton' >ADD</motion.button>
            </div>
        </motion.form>
    );
};

export default ToDoForm;