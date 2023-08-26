import MoonImg from '../assets/icon-moon.svg'


const Navbar = () => {
  return (
    <div className='flex pt-16 justify-between items-center'>
        <h2 className='text-white tracking-[20px] text-3xl font-bold'>TODO</h2>
        <img src={MoonImg} alt='light theme' className='cursor-pointer' />
    </div>
  )
}

export default Navbar