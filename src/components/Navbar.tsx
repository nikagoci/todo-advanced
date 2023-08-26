import MoonImg from '../assets/icon-moon.svg'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between pt-16 md:w-[50%] md:mx-auto '>
        <h2 className='text-white tracking-[20px] text-3xl font-bold'>TODO</h2>
        <img src={MoonImg} alt='light theme' className='cursor-pointer' />
    </div>
  )
}

export default Navbar