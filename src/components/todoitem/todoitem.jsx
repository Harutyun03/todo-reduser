import './todoitem.css'

function Todoitem({todo,del, changeDone}){
    return(
        <div className="box">
                <input type="checkbox"  checked={todo.isDone} onChange={() => changeDone(todo.id)}/>
                <span>{todo.title}</span>
                <div className="btngroup">

                    <button onClick={del}>Delete</button>
                    <button>Edit</button>
                </div>
                
            
        </div>
    )
}

export default Todoitem