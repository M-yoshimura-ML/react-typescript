import React, { useContext } from "react";
import { ToDosContext } from "../store/todos-context";
import ToDoItem from "./ToDoItem";
import classes from "./Todos.module.css";

const ToDos: React.FC = () => {
  const todosCtx = useContext(ToDosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <ToDoItem
          key={item.id}
          text={item.text}
          onRemoveToDo={todosCtx.removeToDo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDos;
