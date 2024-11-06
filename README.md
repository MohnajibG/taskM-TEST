# Task Manager Test

This project is a simple task management application with a backend in Node.js (TypeScript) and a frontend in React.

### Objective
The goal of this exercise is to test your skills in creating a TypeScript API in Node.js without any frameworks and a frontend component in React that interacts with this API.

### Requirements

1. **Backend** (in `/backend`):
   - TypeScript setup for Node.js with routes in `/routes`.
   - Implement two routes:
     - `GET /tasks` - Fetches all tasks.
     - `POST /tasks` - Adds a new task with a `title`.
   - Store tasks in-memory for this test. Each task should have a unique `id` and `title`.
   - Respond with error code `400` if `title` is missing or the JSON is invalid in the `POST` request.

2. **Frontend** (in `/frontend/src/TaskManager.js`):
   - Create a `TaskManager` component that displays tasks and allows adding new ones.
   - Use `fetch` to interact with the backend API.
   - Display a list of all tasks and a form to add a new task.

### Instructions

1. **Setup Backend**
   - Navigate to the `backend` folder.
   - Run `npm install` to install dependencies.
   - Run `npm run dev` to start the server with TypeScript on port 3000.

2. **Setup Frontend**
   - Navigate to the `frontend` folder.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the frontend server on port 3001.

### Notes
- The backend and frontend should work together; the frontend makes requests to `http://localhost:3000` for the backend API.
- You are encouraged to document your code for readability and maintainability.

Good luck!
