import { useState } from 'react'

import CreateTodo from './components/CreateTodo'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import BottomNav from './components/BottomNav'
import Background from './components/Background'

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

  return (
    <section className="w-full h-screen">
      <Background />
      <div className='w-[90%] mx-auto'>
        <Navbar />
        <CreateTodo setTodos={setTodos} />
        <TodoList todos={todos} />
        <BottomNav />
      </div>
    </section>
  )
}

export default App


