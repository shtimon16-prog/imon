# My Task Manager

A simple, responsive to-do list app built with React. Users can add, categorize,
filter, and track tasks, with everything saved automatically so nothing is lost
on refresh.

## Features

- Add new tasks with a category (Personal, Work, Urgent)
- Mark tasks as complete / incomplete
- Delete tasks
- Filter tasks by status: All / Active / Completed
- Live count of remaining and completed tasks
- Data persists across page refreshes using `localStorage`
- Responsive layout — works on both desktop and mobile screen widths

## Technologies Used

- [React](https://react.dev/) (functional components + hooks)
- [Vite](https://vitejs.dev/) — build tool / dev server
- Plain CSS for styling
- Browser `localStorage` API for data persistence

## Setup Instructions

1. Clone this repository
   ```
   git clone <your-repo-url>
   cd todo-app
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run the development server
   ```
   npm run dev
   ```
4. Open the URL shown in the terminal (usually `http://localhost:5173`)

## Screenshots

<!-- Add 2-3 screenshots of your running app below. 
     Example markdown syntax: ![Task list view](screenshots/task-list.png) -->

**Main view / task list:**

*(screenshot here)*

**Adding a task:**

*(screenshot here)*

**Filtering tasks:**

*(screenshot here)*

## Known Limitations

- No due dates or drag-and-drop reordering (listed as stretch goals, not implemented)
- No dark/light theme toggle
- Task IDs are generated with `Date.now()`, which is simple but could theoretically
  collide if two tasks were added in the exact same millisecond
