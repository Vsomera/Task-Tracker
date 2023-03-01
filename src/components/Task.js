import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    // Returns a div of the task and date
    return (
        <div className="task">

            <h3>{task.text} 
                <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(task.id)} /></h3> {/* Will Delete selected task on click with a task id arg*/}

            <p>{task.day}</p>

        </div>
    )
}

export default Task