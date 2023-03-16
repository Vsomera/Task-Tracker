import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle}) => {
    // Returns a div of the task and date
    return (
        <div className={`task ${task.reminder ? `reminder` : `` }`} onDoubleClick={() => onToggle(task.id)}> {/* Will return the id of the selected task*/}
                                                                    {/* Adds reminder class if reminder is true (adds a green select mark on div)*/}
            <h3>
                {task.text} 
                <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(task.id)} /> {/* Will Delete selected task on click with a task id arg*/}
            </h3> 
            <p>{task.day}</p>

        </div>
        
    )
}

export default Task