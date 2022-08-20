import React from "react";
import { useRef, useContext } from "react";
import { ToDosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewToDo: React.FC = () => {
  const todosCtx = useContext(ToDosContext);

  const toDoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = toDoTextInputRef.current!.value;
    if(enteredText?.trim().length === 0) {
      //throw an error
      return;
    }

    todosCtx.addToDo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>ToDo text</label>
      <input type='text' id='text' ref={toDoTextInputRef} />
      <button>Add ToDo</button>
    </form>
  )
}

export default NewToDo;