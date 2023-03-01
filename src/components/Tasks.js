import Task from './Task'

const Tasks = ({ tasks }) => {

    return (
        <>
          {tasks.map((task) => (
            <Task key={task.id} task={task} /> // Outputting task component
            ))}  
        </>
    )
}

export default Tasks