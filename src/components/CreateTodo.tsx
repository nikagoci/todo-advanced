import { Dispatch, FormEvent, SetStateAction, useContext, useEffect } from "react";
import { generator } from 'random-number'

import { TodoContext } from "../context/TodoContext";
import TodoBar from "./ui/TodoBar";

const CreateTodo = () => {
    const { createTodo, todos } = useContext(TodoContext)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const onSubmit = (
        e: FormEvent<HTMLFormElement>,
        value: string,
        isChecked: boolean,
        setInputValue: Dispatch<SetStateAction<string>>,
        setIsChecked: Dispatch<SetStateAction<boolean>>
    ) => {
        e.preventDefault();

        if (value.length > 0) {
            const randomNum: number = generator()(1, 1000000)

            createTodo({
                title: value,
                state: isChecked ? "completed" : "active",
                id: randomNum
            })

            setIsChecked(false)
        }

        setInputValue("")
    };

    return (
        <div className="mt-10 md:w-[50%] md:mx-auto">
            <TodoBar submitHandler={onSubmit} />
        </div>
    );
};

export default CreateTodo;
