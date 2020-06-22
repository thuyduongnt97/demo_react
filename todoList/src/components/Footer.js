import React, { memo } from 'react'
const Footer = memo((props) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong></strong>
                <span> </span>
                <span>{}</span>
                <span> left</span>
            </span>
            <ul className="filters">
                <li>
                    <a href="#/">
                        All
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/active" 
                       
                    >
                        Active
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/completed"
                        
                    >
                        Completed
                    </a>
                </li>
            </ul>
        
        </footer>
     )
})      
export default Footer