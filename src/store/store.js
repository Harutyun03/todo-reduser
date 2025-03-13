export const state = {
    text : '',
    todos : [],
}

export const reduser = (state, action) => {
   switch(action.type){
      case 'changeText' : 
        return {
            ...state,
            text : action.payload
        }

        case 'add' : 
        if(state.text.trim()){
            return {
                ...state,
                todos : [...state.todos, 
                  {
                      id : Date.now(),
                      title : state.text,
                      isDone : false
  
                  },
                ],
            text : ''
            }
        }

        case 'del' :
            return {
                ...state,
                todos : state.todos.filter(el => el.id !== action.payload)
            }
           
        case "Done":
                return {
                    ...state,
                    todos: state.todos.map((todo) => {
                        if (todo.id === action.payload) {
                            return { ...todo, isDone: !todo.isDone }
                        }
                        
                    }
                )
            }

    default : 
       return state
   }
}   