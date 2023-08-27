import { Dispatch, SetStateAction } from "react"
import TodoBar from "./ui/TodoBar"
import { clearCompletedTodosHandler } from "../libs/todo-crud"

type TodoListProps = {
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>>
  curActive: ActiveStatus
}

const TodoList = ({ todos, setTodos, curActive }: TodoListProps) => {
  const itemsLeft = todos.filter((todo) => todo.state === 'active');

  return (
    <div className='mt-10 rounded-md shadow-lg md:w-[50%] md:mx-auto'>
      {todos.filter(todo => curActive === 'all' ? todo : todo.state === curActive ).map(todo => (
        <div key={todo.id} className="border-b ">
          <TodoBar todo={todo} setTodos={setTodos} />
        </div>
      ))}
      <div className="flex justify-between px-6 py-6 text-sm text-gray-400 bg-white rounded-md ">
          <h4>{itemsLeft.length} items left</h4>
          <h4 className="cursor-pointer" onClick={() => clearCompletedTodosHandler({setTodos})}>Clear Completed</h4>
      </div>
    </div>
  )
}

export default TodoList

