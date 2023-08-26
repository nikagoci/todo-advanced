import CrossIcon from '../../assets/icon-cross.svg'


type TodoBarProps = {
    todo?: Todo;
}

const classNames = {
    container: "flex items-center w-full px-6 py-4 bg-white rounded-md",
    checkbox: "w-8 h-8 border border-gray-300 rounded-full cursor-pointer",
    text: "ml-4 text-lg w-[85%]"
}

const TodoBar = ({ todo }: TodoBarProps) => {
    if (!todo) {
        return (
            <form className={classNames.container}>
                <div className={classNames.checkbox} />
                <input type="text" placeholder="Create a new todo..." className={`${classNames.text} outline-none`} />
            </form>
        )
    }

    return (
        <div className={classNames.container}>
            <div className={classNames.checkbox} />
            <div className={`${classNames.text} truncate`}>{todo.title}</div>
            <img src={CrossIcon} alt='remove' className='cursor-pointer' />
        </div>
    )
}

export default TodoBar
