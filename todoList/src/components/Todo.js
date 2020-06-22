import React, { memo} from 'react'

const Todo = memo(props => { return (
    <li>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                    />
                    <label ></label>
                    <button className="destroy"  />
                </div> :
                <input
                    className="edit"
                   
                />
    </li>
)
})

export default Todo