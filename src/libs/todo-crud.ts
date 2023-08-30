export const stateChangeHandler = (todos: Todo[], id: number) => {
  const updatedTodos = todos.map((todo: Todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        state: todo.state === 'active' ? "completed" : "active"
      }
    }

    return todo
  })

  return updatedTodos
}

export const removeTodoHandler = (todos: Todo[], id: number) => {
  return todos.filter((todo: Todo) => todo.id !== id)
};

export const clearCompletedTodosHandler = (todos: Todo[]) => {
  return todos.filter((todo: Todo) => todo.state !== 'completed')
}