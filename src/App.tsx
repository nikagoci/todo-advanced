import { useState } from 'react'

import CreateTodo from './components/CreateTodo'
import Navbar from './components/Navbar'
import Todos from './components/TodoList'

import BackgroundImg from './assets/bg-mobile-light.jpg'
import SingleTodo from './components/TodoList'
import TodoList from './components/TodoList'
import BottomNav from './components/BottomNav'

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
      <div className="h-[30%] w-full absolute bg-red-200 -z-10">
        <img src={BackgroundImg} alt='background' className='w-full h-full bg-top bg-auto' />
      </div>
      <div className='w-[90%] mx-auto'>
        <Navbar />
        <CreateTodo />
        <TodoList todos={todos} />
        <BottomNav />
      </div>
    </section>
  )
}

export default App
