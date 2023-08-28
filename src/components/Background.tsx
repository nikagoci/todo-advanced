import useWindowResize from "../hooks/useWindowResize";

import MobileBackgroundLightImg from '../assets/bg-mobile-light.jpg'
import MobileBackgroundDarkImg from '../assets/bg-mobile-dark.jpg'
import DesktopBackgroundLightImg from '../assets/bg-desktop-light.jpg'
import DesktopBackgroundDarkImg from '../assets/bg-desktop-dark.jpg'

type BackgroundProps = {
    theme: ThemeType
}

const Background = ({ theme }: BackgroundProps) => {
    const [windowSize] = useWindowResize()

    return (
        <div className="h-[30%] w-full absolute bg-red-200 -z-10">
            {windowSize < 768 ? (
                <img src={theme === 'light' ? MobileBackgroundLightImg : MobileBackgroundDarkImg} alt='background' className='w-full h-full bg-top bg-auto' />

            ) : (
                <img src={theme === 'light' ? DesktopBackgroundLightImg : DesktopBackgroundDarkImg} alt='background' className='w-full h-full bg-top bg-auto' />
            )}
        </div>
    )
}

export default Background