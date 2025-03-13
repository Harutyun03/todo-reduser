import './todoitem.css'

function Todoitem({todo,del, change}){
    return(
        <div className="box">
                <input type="checkbox"  checked={todo.isDone} onChange={() => change(todo.id)}/>
                <span>{todo.title}</span>
                <div className="btngroup">
                    <button onClick={del}>Delete</button>
                    <button>Edit</button>
                </div>
        </div>
    )
}

export default Todoitem