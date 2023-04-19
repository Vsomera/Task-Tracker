import { useState, useEffect } from 'react' // React Hook
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



function App() {

  const [showAddTask, setShowAddTask] = useState(false) // state for showing the add task form

  const [tasks, setTasks] = useState([]) // list of tasks, setTasks is used to modify contents of the list

  // React hook that fetches tasks from json server (db.json)
  useEffect(() => {

    const getTasks = async () => {
      // sends a get request to server 
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, []) // executes on browser load

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks") // fetches task data from server
    // if there is an error while fetching the response throw an error
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json() // translates response data into json
    return data
  }

  const toggleAddForm = () => {
    // When called, toggles the Add form
    showAddTask ? setShowAddTask(false) : setShowAddTask(true)
  }

  const addTask = async (task) => {

    const id =  Math.floor(Math.random() * 1000) + 1 // generates unique id number for the task
    const newTask =  { id, ...task } // creates a new object containing the task text, day, and reminder(dict)

    // Send Post requests to add tasks
    await fetch("http://localhost:5000/tasks", {
      method: "POST", // sends a post request to server
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask), // sends the task to the server
      Cache: 'default'
    })

    setTasks([...tasks, newTask]) // updates the current tasks state by adding the new task
  }

  const deleteTask = async (id) => {
    // Sends a delete request to the server to delete a task that matches id param
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" })

    // Deleting Tasks by filtering through tasks
    setTasks(tasks.filter((task) => task.id !== id)) // removes task if id param matches
    console.log("Deleted Task with ID: ", id) // logs the deleted task in the console 
  }


  const toggleReminder = (id) => {
    // Toggles the reminder
    setTasks(tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:
          !task.reminder
      } : task   // toggles the reminder in task from true to false and from false to true
    ))
    console.log("Toggled task", id)
  }

  return (
    <div className="container">
      <Header
        toggleForm={toggleAddForm}
        btnColor={showAddTask ? "red" : "green"}
        btnText={showAddTask ? "Close" : "Add Task"}
      />


      {showAddTask && <AddTask onAdd={addTask} />} {/* If showAddTask is True, show add task form */}
      {tasks.length > 0 ?
        <Tasks tasks={tasks}           // Sends tasks list to Tasks.js component
          onDelete={deleteTask}
          onToggle={toggleReminder} />
        : "No Tasks to Show"} {/* Deletes a task when called with a task id from Task.js component */}
    </div>
  )
}

export default App;
