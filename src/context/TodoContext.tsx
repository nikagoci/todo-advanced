import { createContext, useReducer, ReactNode } from 'react'
import todoReducer from './TodoReducer'

const getTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
}

type ValueType = {
    todos: Todo[];
    stateChange: (id: number) => void;
    createTodo: (todo: Todo) => void
    removeTodo: (id: number) => void;
    clearCompletedTodos: () => void;
    setTodos: (todos: Todo[]) => void;
}

const initialState: ValueType = {
    todos: getTodosFromLocalStorage(),
    stateChange: () => {},
    createTodo: () => {},
    removeTodo: () => {},
    clearCompletedTodos: () => {},
    setTodos: () => {}
}

export const TodoContext = createContext(initialState)

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)


    const stateChange = (id: number) => {
        dispatch({ type: "STATE_CHANGE", payload: id })
    }

    const createTodo = (todo: Todo) => {
        dispatch({ type: "CREATE_TODO", payload: todo })
    }

    const removeTodo = (id: number) => {
        dispatch({ type: "REMOVE_TODO", payload: id })
    }

    const clearCompletedTodos = () => {
        dispatch({ type: "CLEAR_COMPLETED_TODOS" })
    }

    const setTodos = (todos: Todo[]) => {
        dispatch({ type: "SET_TODOS", payload: todos})
    }

    const value: ValueType = {
        todos: state.todos,
        stateChange,
        createTodo,
        removeTodo,
        clearCompletedTodos,
        setTodos
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}


export default TodoContextProvider