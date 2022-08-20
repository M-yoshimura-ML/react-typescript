import React from "react";
import classes from './TodoItem.module.css';

const ToDoItem: React.FC<{ text: string; onRemoveToDo: (event: React.MouseEvent) => void }> = (props) => {

  return (
    <li onClick={props.onRemoveToDo} className={classes.item}>{props.text}</li>
  )
}

export default ToDoItem;