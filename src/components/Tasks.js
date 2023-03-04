import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle}) => {

    return (
        <>
          {tasks.map((task) => (
            <Task key={task.id} 
            task={task}  // Loops through tasks list sends to Task.js component
            onToggle={onToggle}
            onDelete={onDelete}/>
            ))}  
        </>
    )
}

export default Tasks