import MobileBackgroundImg from '../assets/bg-mobile-light.jpg'
import DesktopBackgroundImg from '../assets/bg-desktop-light.jpg'
import useWindowResize from "../hooks/useWindowResize";

const Background = () => {
    const [ windowSize ] = useWindowResize()

    return (
        <div className="h-[30%] w-full absolute bg-red-200 -z-10">
            {windowSize < 768 ? (
                <img src={MobileBackgroundImg} alt='background' className='w-full h-full bg-top bg-auto' />

            ) : (
                <img src={DesktopBackgroundImg} alt='background' className='w-full h-full bg-top bg-auto' />
            )}
        </div>
    )
}

export default Background