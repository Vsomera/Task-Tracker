import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        // function validates text in texboxes and resets the values in the textbox on submit

        e.preventDefault() // prevents submitting to the page

        if (!text) {
            // if text field if empty alert user
            alert('Please add a Task')
            return
        }

        // updates the tasks state, adding the task
        onAdd({ text, day, reminder})

        // resets the text fields in the form
        setText('')
        setDay('')
        setReminder(false)

    }

    return (
    <form className="add-form" onSubmit= { onSubmit }>
        <div className="form-control">
            <label>Task</label>
            <input type="text" 
            placeholder="Add Name of task" 
            value={text} 
            onChange={(e) => setText(e.target.value)} /> {/*  the value inside the texbox, returns a string */}
        </div>

        <div className="form-control">
            <label>Day & Time</label>
            <input type="text" 
            placeholder="Add Day & Time" 
            value={day} 
            onChange={(e) => setDay(e.target.value )} /> {/* Targets the value inside the texbox, returns a string */}
        </div>

        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" 
            placeholder="Add Name of task" 
            checked = {reminder}
            value={reminder} 
            onChange={(e) => setReminder(e.currentTarget.checked)} /> {/* Targets the check box returning a boolean */}
        </div>
        <input type="submit" value='Save Task'className="btn btn-block" /> {/* When clicked, initiates onSubmit */}
    </form>
    )
}

export default AddTask