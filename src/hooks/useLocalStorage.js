import { useState, useEffect } from 'react'

// A reusable hook: works just like useState, but automatically
// saves to (and loads from) localStorage under the given key.
function useLocalStorage(key, initialValue) {
  // Lazy initializer: only runs once, on first render.
  // Tries to read existing data from localStorage; falls back to initialValue.
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch (error) {
      console.error('Error reading localStorage key "' + key + '":', error)
      return initialValue
    }
  })

  // Every time `value` changes, write it back to localStorage.
  // This is the useEffect requirement from the assignment.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error writing localStorage key "' + key + '":', error)
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
