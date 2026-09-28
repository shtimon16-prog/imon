import TaskItem from './TaskItem.jsx'

function TaskList({ tasks, onToggle, onDelete }) {
  // Conditional rendering: show an "empty state" message
  // instead of an empty list when there's nothing to show.
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks here. Add one above!</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        // key MUST be unique and stable — React uses it to track
        // which item is which across re-renders.
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList
