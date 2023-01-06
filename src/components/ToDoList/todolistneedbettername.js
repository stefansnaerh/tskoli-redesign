import '../ToDoList/todo.scss';
import { motion } from "framer-motion";


const ToDoList = () => {
    return (
        <div className="listheader">
            <header>
                <motion.h1 className='todolistheader' >To Do List</motion.h1>
            </header>
        </div>
    )
}



export default ToDoList;