import { createContext, useContext } from "react";

export const TodoContext = createContext ({
    todos:[
        {
            id: 1,
            todo: 'Todo mes',
            completed: false,
        }

    ],
    addTodo: (todo) => {},
    updateTodo: (id,tod0) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider