import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Search from "./components/Search";


function App() {
  const [todos, setTodos] = useState([]);
 

  const addTodo = (text, priority) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false,priority:priority}
    console.log(todo);
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };
  // const searchTodo =(text)=>{

  // }

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.key === id.key ? { ...todo, title: todo.text } : todo
      )
    );
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

  
  let sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <hr className="separator"/>
      <div className="todo-container">
      {sortedTodos.map((todo) => {
        return (
          <List removeTodo={removeTodo} completeTodo={completeTodo} editTodo={editTodo}  todo={todo} key={todo.id}/>
        )
      })}
      </div>
     
    </div>
  );
  
}

export default App;