import { useState } from 'react' // React Hook
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



function App() {

  const [tasks, setTasks] = useState([ // list of tasks, setTasks is used to modify contents of the list
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Food Shopping",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Meeting at School",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ])



  const deleteTask = (id) => {
    // Deleting Tasks by filtering through tasks
    setTasks(tasks.filter((task) => task.id !== id)) // removes task if id param matches
    console.log("Deleted Task with ID: ", id) // logs the deleted task in the console 
  }


  const toggleReminder = (id) => {
    // Toggles the reminder
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: 
      !task.reminder } : task   // toggles the reminder in task from true to false and from false to true
    ))
    console.log("Toggled task", id)
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
        {tasks.length > 0 ? 
          <Tasks tasks={tasks}           // Sends tasks list to Tasks.js component
          onDelete={deleteTask}
          onToggle = {toggleReminder}/> 
            : "No Tasks to Show"} {/* Deletes a task when called with a task id from Task.js component */}
    </div>
  )
}

export default App;
