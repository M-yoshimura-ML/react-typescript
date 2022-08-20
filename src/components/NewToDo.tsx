import React from "react";
import { useRef } from "react";
import classes from './NewTodo.module.css';

const NewToDo: React.FC<{onAddToDo: (text: string) => void }> = (props) => {
  const toDoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = toDoTextInputRef.current!.value;
    if(enteredText?.trim().length === 0) {
      //throw an error
      return;
    }

    props.onAddToDo(enteredText);
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