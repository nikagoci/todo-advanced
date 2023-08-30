import { useContext } from "react"
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

import { TodoContext } from "../context/TodoContext";
import TodoBar from "./ui/TodoBar"

type TodoListProps = {
  curActive: ActiveStatus
}

const TodoList = ({ curActive }: TodoListProps) => {
  const { todos, setTodos, clearCompletedTodos } = useContext(TodoContext)

  const itemsLeft = todos.filter((todo) => todo.state === 'active');

  const handleRLDDChange = (newList: any) => {
    setTodos(newList)
  }

  return (
    <div className='mt-10 rounded-md shadow-lg md:w-[50%] md:mx-auto'>
      <RLDD
        items={todos.filter(todo => curActive === 'all' ? todo : todo.state === curActive)}
        itemRenderer={(todo: Todo) => (
          <div key={todo.id} className="border-b dark:border-[hsl(237,14%,26%)]">
            <TodoBar todo={todo} />
          </div>
        )}
        onChange={handleRLDDChange}
      />
      <div className="flex justify-between px-6 py-6 text-sm text-gray-400 dark:bg-[hsl(235,24%,19%)] bg-white rounded-md ">
        <h4>{itemsLeft.length} items left</h4>
        <h4 className="cursor-pointer" onClick={clearCompletedTodos}>Clear Completed</h4>
      </div>
    </div>
  )
}

export default TodoList

