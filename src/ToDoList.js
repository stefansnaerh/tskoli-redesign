import { useState, useEffect, useContext } from "react";
import ToDo from "./ToDo";


const ToDoListOne = ({toDoList}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} />
                )
            })}
        </div>
    );
};

export default ToDoListOne;