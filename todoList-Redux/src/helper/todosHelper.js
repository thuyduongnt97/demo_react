export const  isNotCheckAll = (todos = []) => todos.find(todo=> !todo.isCompleted)
export const fillterByStatus = (todos = [], status = '', id) => {
    switch (status) {
        case 'ACTIVE':
            return todos.filter(todo => !todo.isCompleted)
        case 'COMPLETE':
            return todos.filter(todo => todo.isCompleted)
        case 'REMOVE':
            return todos.filter(todo => todo.id !== id)
        default:
            return todos;
    }
} 