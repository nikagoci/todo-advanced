import { Dispatch, SetStateAction } from 'react'

import MoonIcon from '../assets/icon-moon.svg'
import SunIcon from '../assets/icon-sun.svg'

type NavbarProps = {
  theme: ThemeType
  setTheme: Dispatch<SetStateAction<ThemeType>>
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {

  const handleThemeSwitch = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='flex items-center justify-between pt-16 md:w-[50%] md:mx-auto '>
      <h2 className='text-white tracking-[20px] text-3xl font-bold'>TODO</h2>
      <img src={theme === 'light' ? MoonIcon : SunIcon} alt='light theme' className='cursor-pointer' onClick={handleThemeSwitch} />
    </div>
  )
}

export default Navbar