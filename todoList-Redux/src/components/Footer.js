import React, { memo } from 'react'
const Footer = memo((props) => {

    const {status,setStatusFilter, numOfTodos, numOfTodosLeft, clearCompleted} = props
    const filterBtns = [
        {
            title: 'ALL',
            isActive: status ==='ALL',
            onClick: () => setStatusFilter('ALL'),
            link: ''
        },
        {
            title: 'ACTIVE',
            isActive: status ==='ACTIVE',
            onClick: () => setStatusFilter('ACTIVE'),
            link: 'active'
        },
        {
            title: 'COMPLETE',
            isActive: status ==='COMPLETE',
            onClick: () => setStatusFilter('COMPLETE'),
            link: 'complete'
        }
    ]
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{numOfTodosLeft}</strong>
                <span> </span>
                <span>{numOfTodosLeft <= 1 ? 'item' : 'items'}</span>
                <span> </span>
            </span>
            <ul className="filters">
                { filterBtns.map((btn, index) => <FilterBtn key = {index} {...btn}/>)   
                }
            </ul>
            {numOfTodos > numOfTodosLeft && <button className="clear-completed" onClick = {clearCompleted} > Clear completed</button>}
        </footer>
     )
})    

const FilterBtn = memo(props =>{
    const {title, link, onClick, isActive} = props
    return (
        <>
            <li>
                <a
                    href={`#/${link}`}
                    className={`${isActive ? 'selected' : ''}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
        </>
    );
})
export default Footer