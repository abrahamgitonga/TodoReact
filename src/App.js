import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import search from "./components/search";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, priority) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false, important:false,priority:priority}
    console.log(todo);
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };
  const searchTodo =(text)=>{

  }

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      // 
      if(todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    })

    setTodos(updatedTodos)
  }
  let sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <Form addTodo={addTodo} searchTodo={searchTodo} />
      <hr className="separator"/>
      {sortedTodos.map((todo) => {
        return (
          <List removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
  
}

export default App;