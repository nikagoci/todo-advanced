import CrossIcon from '../../assets/icon-cross.svg'


type TodoBarProps = {
    todo?: Todo;
}


const TodoBar = ({ todo }: TodoBarProps) => {
    if (!todo) {
        return (
            <form className="flex items-center w-full px-6 py-4 bg-white rounded-md ">
                <div className="w-8 h-8 border border-gray-300 rounded-full cursor-pointer" />
                <input type="text" placeholder="Create a new todo..." className="w-[85%] ml-4 text-lg outline-none " />
            </form>
        )
    }

    return (
        <div className="flex items-center w-full px-6 py-4 bg-white rounded-md">
            <div className="w-8 h-8 border border-gray-300 rounded-full cursor-pointer" />
            <div className="ml-4 text-lg w-[85%] truncate outline-none ">{todo.title}</div>
            <img src={CrossIcon} alt='remove' className='cursor-pointer' />
        </div>
    )
}

export default TodoBar
