// A "dumb" / presentational component: it just displays data
// and calls callbacks when the user interacts. No state of its own needed.
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </label>
      <span className={`category-tag category-${task.category.toLowerCase()}`}>
        {task.category}
      </span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  )
}

export default TaskItem
