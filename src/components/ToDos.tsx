import React from "react";
import ToDo from "../models/todo";
import ToDoItem from "./ToDoItem";
import classes from "./Todos.module.css";

const ToDos: React.FC<{ items: ToDo[]; onRemoveToDo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <ToDoItem
          key={item.id}
          text={item.text}
          onRemoveToDo={props.onRemoveToDo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDos;
