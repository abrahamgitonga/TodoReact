import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"
import {AiFillEdit} from "react-icons/ai"

export default function TodoItem(props) {
    const { todos, removeTodo, completeTodo,editTodo } = props
    return (
        <>
            {todos.map((todo) => (

            <div id={todo.priority === "high"? "high": todo.priority === "medium"? "medium":"low" } className={todo.completed ? "todo-row complete" : "todo-row"}>
                <div className="content">
                    {todo.text}
                </div>
                <div className="iconsContainer">
                    {/* <p className='important'>{todo.priority}</p> */}
                    <div className="top">
                        <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
                    </div>
                    <div className="bottom">
                        <AiFillEdit onClick={() =>editTodo(todo.id)}/>
                        <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
                    </div>
                    
                </div>
            </div>
            ))}
        </>
    )
}