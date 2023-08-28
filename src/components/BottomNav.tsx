import { useState } from 'react'

type OptionsType = {
    title: ActiveStatus,
    isActive: boolean
}

type BottomNavProps = {
    getActiveStatus: (active: ActiveStatus) => void
}

const BottomNav = ({getActiveStatus} : BottomNavProps) => {
    const [options, setOptions] = useState<OptionsType[]>([
        {
            title: "all",
            isActive: true
        },
        {
            title: "active",
            isActive: false
        },
        {
            title: "completed",
            isActive: false
        },
    ])

    const activeChangeHandler = (index: number) => {
        getActiveStatus(options[index].title)

        const uptadedOptions = options.map(option => ({
            ...option,
            isActive: false
        }))

        uptadedOptions[index].isActive = true;
        setOptions(uptadedOptions)
    }

    return (
        <ul className="flex justify-center dark:bg-[hsl(235,24%,19%)] py-5 my-10 bg-white rounded-lg shadow-lg gap-x-6 md:w-[50%] md:mx-auto" >
            {options.map((option, index) => (
                <li key={index} className={`${option.isActive ? "text-bright_blue" : "text-gray-400"} font-bold cursor-pointer`} onClick={() => activeChangeHandler(index)}>{option.title.slice(0, 1).toUpperCase() + option.title.slice(1) }</li>
            ))}
        </ul>
    )
}

export default BottomNav