import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"
import {AiFillEdit} from "react-icons/ai"

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo,priority,editTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            {todo.text}
            <div className="iconsContainer">
                <p className='important'>{todo.priority}</p>
                <AiFillEdit onClick={() =>editTodo(todo.id)}/>
                <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
                <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
                
            </div>
        </div>
    )
}