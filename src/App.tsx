// import React from 'react';
// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import ToDos from './components/ToDos';
import ToDo from './models/todo';
import NewToDo from './components/NewToDo';

function App() {
  // const todos = [new ToDo('Learn React'), new ToDo('Learn TypeScript')];

  const [todos, setToDos] = useState<ToDo[]>([]);

  const addToDoHandler = (text: string) => {
    const newToDo = new ToDo(text);

    setToDos((prevToDo) => {
      return prevToDo.concat(newToDo);
    })
  }

  const removeToDoHandler = (toDoId: string) => {
    setToDos((prevToDo) => {
      return prevToDo.filter(toDo => toDo.id !== toDoId);
    })
  }

  return (
    <div>
      <NewToDo onAddToDo={addToDoHandler} />
      <ToDos items={todos} onRemoveToDo={removeToDoHandler} />
    </div>
  );
}

export default App;
