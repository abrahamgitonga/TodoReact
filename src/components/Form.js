import React, { useState, useRef } from "react";


export default function TodoForm(props) {
  const [input, setInput] = useState("");
  // const [input_search, setSearch] = useState("")

  // priority useRef
  const priorityUseRef = new useRef()

  const handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault()
    props.addTodo(input,priorityUseRef.current.value)

    setInput("")
  } 

  // const search = (e)=> {
  //   e.preventDefault()
  //   props.searchTodo(input_search)
  //   setSearch("")

  // }

  return (
    <form onSubmit={handleSubmit} className="form_todo">
      
      
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input_todo"
        placeholder="Add task"
      />
      <select ref={priorityUseRef} name="priority" id="priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit" className="button_todo">Add</button>
    </form>
  );
}