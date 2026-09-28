import { useState } from 'react'

// onAddTask is a callback function passed down from the parent (App).
// This is how a CHILD component sends data UP to its parent.
function TaskForm({ onAddTask }) {
  // Controlled inputs: the input's value always comes from React state,
  // not from the DOM itself.
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Personal')

  function handleSubmit(event) {
    event.preventDefault() // stop the page from reloading (default form behavior)

    const trimmed = text.trim()
    if (trimmed === '') return // don't add empty tasks

    onAddTask({
      id: Date.now(),        // simple unique id
      text: trimmed,
      completed: false,
      category,
    })

    setText('') // clear the input after adding
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Urgent">Urgent</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
