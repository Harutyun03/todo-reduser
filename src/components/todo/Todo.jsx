import React from 'react'
import { useReducer } from 'react'
import { reduser, state } from '../../store/store'
import  './Todo.css'
import Todoitem from '../todoitem/todoitem'

function Todo(){

    const [newState, dispatch] = useReducer(reduser, state)

    const removetodo = (id) => {
        return dispatch({ type: "del", payload: id })
      }

    const changeDone = (id) => {
        dispatch({ type: "Done", payload: id })
    }
    return(
        <div className='parent'>
           <input value={newState.text} onChange={(e) => dispatch({type : 'changeText', payload : e.target.value})}/>
           <button onClick={() => dispatch({type : 'add'})} className='btn'>add</button>
          
           
            {
                newState.todos.map((todo) => {
                    return (
                        <div className='todo' key={todo.id}>
                            <Todoitem
                              todo={todo}
                              del={() => removetodo(todo.id)}
                              changeDone={() => changeDone(todo.id)}
                            />
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Todo