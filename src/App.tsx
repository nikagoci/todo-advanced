import BackgroundImg from './assets/bg-mobile-light.jpg'
import CreateTodo from './components/CreateTodo'
import Navbar from './components/Navbar'


const App = () => {

  return (
    <section className="w-full h-screen">
      <div className="h-[30%] w-full absolute bg-red-200 -z-10">
        <img src={BackgroundImg} alt='background' className='bg-auto w-full h-full bg-top' />
      </div>
      <div className='w-[90%] mx-auto'>
        <Navbar />
        {/* <CreateTodo /> */}
      </div>
    </section>
  )
}

export default App
