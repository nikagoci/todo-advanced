import { useState, useEffect } from 'react'

import { getWindowSize } from '../libs/window-size';

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return [windowSize]
}


export default useWindowResize;