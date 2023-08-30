import { useState } from 'react'

import CreateTodo from './components/CreateTodo'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import BottomNav from './components/BottomNav'
import Background from './components/Background'
import useTheme from './hooks/useTheme'
import TodoContextProvider from './context/TodoContext'

const App = () => {
  const [curActive, setCurActive] = useState<ActiveStatus>("all")
  const { theme, setTheme } = useTheme()

  const getActiveStatus = (active: ActiveStatus) => {
    setCurActive(active)
  }

  return (
    <section className="w-full min-h-screen dark:bg-[hsl(235,21%,11%)] absolute -z-20">
      <Background theme={theme} />
      <div className='w-[90%] mx-auto'>
        <Navbar theme={theme} setTheme={setTheme} />
        <TodoContextProvider>
          <CreateTodo />
          <TodoList curActive={curActive} />
          <BottomNav getActiveStatus={getActiveStatus} />
        </TodoContextProvider>
      </div>
    </section>
  )
}

export default App


