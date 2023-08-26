import { useState } from 'react'

type OptionsType = {
    title: string,
    isActive: boolean
}

const BottomNav = () => {
    const [options, setOptions] = useState<OptionsType[]>([
        {
            title: "All",
            isActive: true
        },
        {
            title: "Active",
            isActive: false
        },
        {
            title: "Completed",
            isActive: false
        },
    ])

    const activeChangeHandler = (index: number) => {
        const uptadedOptions = options.map(option => ({
            ...option,
            isActive: false
        }))

        uptadedOptions[index].isActive = true;
        setOptions(uptadedOptions)
    }

    return (
        <ul className="flex justify-center py-3 mt-10 bg-white rounded-lg shadow-md gap-x-6 md:w-[50%] md:mx-auto" >
            {options.map((option, index) => (
                <li key={index} className={`${option.isActive ? "text-bright_blue" : "text-gray-400"} font-bold cursor-pointer`} onClick={() => activeChangeHandler(index)}>{option.title}</li>
            ))}
        </ul>
    )
}

export default BottomNav