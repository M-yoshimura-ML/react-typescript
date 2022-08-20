// import { type } from "@testing-library/user-event/dist/type";
import React from "react"
import { useState } from "react";
import ToDo from "../models/todo";

type ToDosContextObj = {
  items: ToDo[];
  addToDo: (text: string) => void,
  removeToDo: (id: string) => void,
}

type Props = { children: React.ReactNode };

export const ToDosContext = React.createContext<ToDosContextObj>({
  items: [],
  addToDo: () => {},
  removeToDo: (id: string) => {}
});

const ToDosContextProvider: React.FC<Props> = ({children}) => {
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

  const contextValue: ToDosContextObj = {
    items: todos,
    addToDo: addToDoHandler,
    removeToDo: removeToDoHandler
  }

  return (
    <ToDosContext.Provider value={contextValue}>
      {children}
    </ToDosContext.Provider>
  )
}

export default ToDosContextProvider;
