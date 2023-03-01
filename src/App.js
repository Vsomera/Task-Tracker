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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
      {/* TODO : Implement Delete Button */}
    </div>
  );
}

export default App;
