import { useEffect, useState } from 'react'

import CreateTodo from './components/CreateTodo'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import BottomNav from './components/BottomNav'
import Background from './components/Background'
import useTheme from './hooks/useTheme'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [curActive, setCurActive] = useState<ActiveStatus>("all")
  const { theme, setTheme } = useTheme()

  const getActiveStatus = (active: ActiveStatus) => {
    setCurActive(active)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <section className="w-full min-h-screen dark:bg-[hsl(235,21%,11%)] absolute -z-20">
      <Background theme={theme} />
      <div className='w-[90%] mx-auto'>
        <Navbar theme={theme} setTheme={setTheme} />
        <CreateTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} curActive={curActive} />
        <BottomNav getActiveStatus={getActiveStatus} />
      </div>
    </section>
  )
}

export default App


