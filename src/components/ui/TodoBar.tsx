import { Dispatch, FormEvent, SetStateAction, useContext, useState } from "react";

import { TodoContext } from "../../context/TodoContext";
import CrossIcon from "../../assets/icon-cross.svg";
import CheckIcon from "../../assets/icon-check.svg"

type TodoBarProps = {
  todo?: Todo;
  submitHandler?: (e: FormEvent<HTMLFormElement>, value: string, isChecked: boolean, setInputValue: Dispatch<SetStateAction<string>>, setIsChecked: Dispatch<SetStateAction<boolean>>) => void;
};

const classNames = {
  container: "flex items-center w-full px-6 py-4 bg-white rounded-md dark:bg-[hsl(235,24%,19%)]",
  checkbox: "w-8 h-8 border border-gray-300 dark:border-[hsl(237,14%,26%)] rounded-full cursor-pointer",
  text: "ml-4 text-md w-[85%] dark:text-white text-black bg-white dark:bg-[hsl(235,24%,19%)]",
  "checkbox-checked": "from-[hsl(192,100%,67%)] flex justify-center items-center bg-gradient-to-br to-[hsl(280,87%,65%)]"
};

const TodoBar = ({ todo, submitHandler }: TodoBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false)
  const { removeTodo, stateChange } = useContext(TodoContext)

  if (!todo && submitHandler) {
    return (
      <form onSubmit={(e) => submitHandler(e, inputValue, isChecked, setInputValue, setIsChecked)} className={classNames.container}>
        {isChecked ? (
          <div className={`${classNames.checkbox} ${classNames["checkbox-checked"]}`} onClick={() => setIsChecked(prev => !prev)} >
            <img src={CheckIcon} alt='check' />
          </div>
        ) : (
          <div className={classNames.checkbox} onClick={() => setIsChecked(prev => !prev)} />
        )}

        <input
          type="text"
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`${classNames.text} outline-none`}
        />
      </form>
    );
  }

  if (!todo) return;

  return (
    <div className={classNames.container}>
      {todo.state === 'active' ? (
        <div className={classNames.checkbox} onClick={() => stateChange(todo.id)} />
      ) : (
        <div className={`${classNames.checkbox} ${classNames["checkbox-checked"]}`} onClick={() => stateChange(todo.id)} >
          <img src={CheckIcon} alt='check' />
        </div>
      )}

      <div className={`${classNames.text} truncate`}>{todo.title}</div>
      <img src={CrossIcon} alt="remove" className="cursor-pointer" onClick={() => removeTodo(todo.id)} />
    </div>
  );
};

export default TodoBar;
