import { useState } from 'react' // React Hook
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {

  const [tasks, setTasks] = useState([ // list of tasks
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Food Shopping",
      day: "Feb 6th at 1:30pm",
      reminder: true,
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

  return (
    <div className="container">
      <Header />
      <Tasks 
        tasks={tasks}           // Sends tasks list to Tasks.js component
        onDelete={deleteTask}/> {/* Deletes a task when called with a task id from Task.js component */}

    </div>
  );
}

export default App;
