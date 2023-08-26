import BackgroundImg from './assets/bg-mobile-light.jpg'


const App = () => {

  return (
    <section className="w-full h-screen">
      <div className="h-[30%] w-full absolute bg-red-200">
        <img src={BackgroundImg} alt='background' className='bg-auto w-full h-full bg-top' />
      </div>
      <div>

      </div>
    </section>
  )
}

export default App
