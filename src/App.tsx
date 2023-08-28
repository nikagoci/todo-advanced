import { useState } from 'react'

import CreateTodo from './components/CreateTodo'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import BottomNav from './components/BottomNav'
import Background from './components/Background'
import useTheme from './hooks/useTheme'

const fakeTodos: Todo[] = [
  {
    title: "Do Something",
    state: "active",
    id: "1"
  },
  {
    title: "asdasduoaouasuffoaffaafoafoaf afsuh ahsf af has f",
    state: "completed",
    id: "2"
  }
]

const App = () => {
  const [todos, setTodos] = useState(fakeTodos)
  const [curActive, setCurActive] = useState<ActiveStatus>("all")
  const { theme, setTheme } = useTheme()

  const getActiveStatus = (active: ActiveStatus) => {
    setCurActive(active)
  }

  return (
    <section className="w-full">
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


