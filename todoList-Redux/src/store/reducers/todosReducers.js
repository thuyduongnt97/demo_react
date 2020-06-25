import {
    ADD_TODO, ON_EDIT_TODO
} from './../actions'


const INITIAL_STATE = {
    listTodos: [{
        id: 1,
        text: 'todo1',
        isCompleted: false
    },{
        id: 2,
        text: 'todo2',
        isCompleted: false
    },{
        id: 3,
        text: 'todo3',
        isCompleted: true
    }],
    isCheckedAll : false,
    status: "ALL"
}
const todosReducers = (state = INITIAL_STATE, action) => {
    const {listTodos} = state
    const list = JSON.parse(JSON.stringify(listTodos)) 

    switch (action.type) {
        case ADD_TODO: 
            return Object.assign({}, state, {
                listTodos: [...list, action.todo]
            })
        case ON_EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                  { ...todo, text: action.text } :
                  todo
              )
        default:
            return state
    }
}

export default todosReducers