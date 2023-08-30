const todoReducer = (state: any, action: any) => {
    switch (action.type) {
        case "STATE_CHANGE":
            const updatedTodos = state.todos.map((todo: Todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        state: todo.state === 'active' ? "completed" : "active"
                    }
                }

                return todo
            })

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
            const filteredTodos = state.todos.filter((todo: Todo) => todo.id !== action.payload)

            return {
                ...state,
                todos: filteredTodos
            }
        case "CLEAR_COMPLETED_TODOS":
            const completedTodos = state.todos.filter((todo: Todo) => todo.state !== 'completed')

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