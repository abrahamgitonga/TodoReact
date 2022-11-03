import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
// import Search from "./components/Search";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [selectedTodo, setSelectedTodo] = useState({});

  const handleChange = (e) => {
    setInput(e.target.value)
  }
 

  const addTodo = (text, priority) => {
    let id = Math.ceil(Math.random() * 50);
    // if(todos.length > 0) {
    //   id = todos[0].id + 1
    // }
    let todo = {id: id, text: text, completed: false,priority:priority}
    let newTodos = [...todos, todo]
    setTodos(newTodos)
  };
  // const searchTodo =(text)=>{

  // }

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    console.log(id)
    let currentTodo = todos.find((todo) => todo.id === id);
    setInput(currentTodo.text);
    setSelectedTodo(currentTodo);
    // removeTodo(id);
    // let updatedTodos = todos.map((todo) => todo.id === currentTodo.id ? { ...todo, title: todo.text} : todo)
    // setTodos(updatedTodos);
    // console.log(updatedTodos)
    // setTodos((todos) => {
    //   todos.map((todo) => {
    //     console.log(todo);
    //     return todo.id === id ? { ...todo, title: todo.text } : todo
    //     }
    //   )
    // }
    // );
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

  console.log(todos)

  
  // let sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <Form 
        addTodo={addTodo} 
        input={input} 
        handleChange={handleChange} 
        setInput={setInput} 
        selectedTodo={selectedTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <hr className="separator"/>
      <div className="todo-container">
      <List todos={todos} editTodo={editTodo} removeTodo={removeTodo} />
      {/* {sortedTodos.map((todo) => {
        return (
          <List removeTodo={removeTodo} completeTodo={completeTodo} editTodo={editTodo}  todos={todos} key={todo.id}/>
        )
      })} */}
      </div>
     
    </div>
  );
  
}

export default App;