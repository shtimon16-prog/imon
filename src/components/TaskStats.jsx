function TaskStats({ tasks }) {
  const remaining = tasks.filter((t) => !t.completed).length
  const completed = tasks.filter((t) => t.completed).length

  return (
    <p className="task-stats">
      {remaining} remaining &middot; {completed} completed
    </p>
  )
}

export default TaskStats
