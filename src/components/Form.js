import React, { useState, useRef } from "react";


export default function TodoForm(props) {
  // const [input, setInput] = useState("");
  // const [input_search, setSearch] = useState("")

  // priority useRef
  const priorityUseRef = new useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e)
    if (props.selectedTodo.id) {
      let updatedTodos = props.todos.map((todo) => {
        if (todo.id === props.selectedTodo.id) {
          return { ...todo, text: props.input }
        } else {
          return todo
        }
      })
      props.setTodos(updatedTodos);
      props.setInput('')
    } else {
      if (!props.input) alert("You need to type something!")
      props.addTodo(props.input,priorityUseRef.current.value)

      props.setInput('')
    }
  } 

 

  return( 
    <form onSubmit={handleSubmit} className="form_todo">
      
      
      <input
        value={props.input}
        onChange={props.handleChange}
        // onChange={(e) => setInput(e.target.value)}
        className="input_todo"
        placeholder="Add task"
      />
      <select ref={priorityUseRef} name="priority" id="priority">
        <option id="high-priority" value="high">High</option>
        <option id="medium-priority" value="medium">Medium</option>
        <option id="low-priority" value="low">Low</option>
      </select>
      <button type="submit" className="button_todo">Add</button>
    </form>
  );
}