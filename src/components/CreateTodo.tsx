import { Dispatch, FormEvent, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoBar from "./ui/TodoBar";

type CreateTodoProps = {
    setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const CreateTodo = ({ setTodos }: CreateTodoProps) => {
    const onSubmit = (
        e: FormEvent<HTMLFormElement>,
        value: string,
        isChecked: boolean,
        setInputValue: Dispatch<SetStateAction<string>>,
        setIsChecked: Dispatch<SetStateAction<boolean>>
    ) => {
        e.preventDefault();

        if (value.length > 0) {
            const uniqueId = uuidv4()

            setTodos((prev) => {
                return [
                    ...prev,
                    {
                        title: value,
                        state: isChecked ? "completed" : "active",
                        id: uniqueId,
                    },
                ];
            });

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
