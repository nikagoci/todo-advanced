import TodoBar from "./ui/TodoBar"

type TodoListProps = {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (

    <div className='mt-10 rounded-md shadow-lg'>
      {todos.map(todo => (
        <div key={todo.id} className="border-b ">
          <TodoBar todo={todo} />
        </div>
      ))}
      <div className="flex justify-between px-6 py-6 text-sm text-gray-400 bg-white rounded-md ">
          <h4>5 items left</h4>
          <h4 className="cursor-pointer">Clear Completed</h4>
      </div>
    </div>
  )
}

export default TodoList

