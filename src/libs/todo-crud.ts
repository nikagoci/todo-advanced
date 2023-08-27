import { Dispatch, SetStateAction } from "react";

type TodoProps = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  todo: Todo;
};

export const stateChangeHandler = ({ setTodos, todo }: TodoProps) => {
  setTodos((prev) => {
    const updatedTodos: Todo[] = prev.map((t) => {
      if (t.id === todo.id) {
        return {
          title: t.title,
          state: t.state === "active" ? "completed" : "active",
          id: t.id,
        };
      }

      return t;
    });

    return updatedTodos;
  });
};

export const removeTodoHandler = ({ setTodos, todo }: TodoProps) => {
  setTodos((prev) => prev.filter((t) => t.id !== todo.id));
};
