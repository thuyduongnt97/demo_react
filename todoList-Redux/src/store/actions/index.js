export const ADD_TODO  = 'ADD_TODO'
export const ON_EDIT_TODO = 'ON_EDIT_TODO'

export const addTodo = (todo = {}) =>{
    return {
        todo,
        type: ADD_TODO
    }
}
export const onEditTodo = (id, text)=> {
    return{
        id,
        text,
        type: ON_EDIT_TODO
    }
    
}