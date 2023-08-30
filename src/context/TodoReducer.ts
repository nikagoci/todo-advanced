import { clearCompletedTodosHandler, removeTodoHandler, stateChangeHandler } from "../libs/todo-crud"
import { ValueType } from "./TodoContext"

const todoReducer = (state: ValueType, action: any) => {
    switch (action.type) {
        case "STATE_CHANGE":
            const updatedTodos = stateChangeHandler(state.todos, action.payload)

            return {
                ...state,
                todos: updatedTodos
            }

        case "CREATE_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case "REMOVE_TODO":
            const filteredTodos = removeTodoHandler(state.todos, action.payload)

            return {
                ...state,
                todos: filteredTodos
            }
        case "CLEAR_COMPLETED_TODOS":
            const completedTodos = clearCompletedTodosHandler(state.todos)

            return {
                ...state,
                todos: completedTodos
            }
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload
            }

        default:
            return state
    }
}

export default todoReducer