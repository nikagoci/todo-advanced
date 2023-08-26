
const TodoBar = () => {
    return (
        <div>
            <div className="rounded-full bg-white border-gray-300 cursor-pointer border w-8 h-8" />
            <input type="text" placeholder="Create a new todo..." className="absolute text-lg top-0 left-16 h-full w-[86%] rounded-md outline-none px-2 " />
        </div>
    )
}

export default TodoBar