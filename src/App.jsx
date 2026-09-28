import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage.js'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import FilterBar from './components/FilterBar.jsx'
import TaskStats from './components/TaskStats.jsx'

function App() {
  // The task list lives here (in the parent) and persists via localStorage.
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useState('All')

  function addTask(task) {
    setTasks([...tasks, task])
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  // Derived state: don't store "filteredTasks" separately,
  // just compute it fresh from `tasks` + `filter` on every render.
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
    return true // 'All'
  })

  return (
    <div className="app">
      <h1>My Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <FilterBar currentFilter={filter} onFilterChange={setFilter} />
      <TaskStats tasks={tasks} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}

export default App
