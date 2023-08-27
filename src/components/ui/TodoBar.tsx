import { Dispatch, FormEvent, SetStateAction, useState } from "react";

import { removeTodoHandler, stateChangeHandler } from "../../libs/todo-crud";
import CrossIcon from "../../assets/icon-cross.svg";
import CheckIcon from "../../assets/icon-check.svg"

type TodoBarProps = {
  todo?: Todo;
  submitHandler?: (e: FormEvent<HTMLFormElement>, value: string, isChecked: boolean, setInputValue: Dispatch<SetStateAction<string>>, setIsChecked: Dispatch<SetStateAction<boolean>>) => void;
  setTodos: Dispatch<SetStateAction<Todo[]>>
};

const classNames = {
  container: "flex items-center w-full px-6 py-4 bg-white rounded-md",
  checkbox: "w-8 h-8 border border-gray-300 rounded-full cursor-pointer",
  text: "ml-4 text-lg w-[85%]",
  "checkbox-checked": "from-[hsl(192,100%,67%)] flex justify-center items-center bg-gradient-to-br to-[hsl(280,87%,65%)]"
};

const TodoBar = ({ todo, submitHandler, setTodos }: TodoBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false)

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

  if(!todo) return;

  return (
    <div className={classNames.container}>
      {todo.state === 'active' ? (
        <div className={classNames.checkbox} onClick={() => stateChangeHandler({setTodos, todo})} />
      ) : (
        <div className={`${classNames.checkbox} ${classNames["checkbox-checked"]}`} onClick={() => stateChangeHandler({setTodos, todo})} >
          <img src={CheckIcon} alt='check' />
        </div>
      )}

      <div className={`${classNames.text} truncate`}>{todo.title}</div>
      <img src={CrossIcon} alt="remove" className="cursor-pointer" onClick={() => removeTodoHandler({setTodos, todo})} />
    </div>
  );
};

export default TodoBar;
