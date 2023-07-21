import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

const CATEGORIES = ["Work", "Personal", "Shopping"];
const TASKS = [
  { id: 1, text: "Complete project report", category: "Work" },
  { id: 2, text: "Buy groceries", category: "Shopping" },
  { id: 3, text: "Call a friend", category: "Personal" },
  // Add more tasks as needed...
];

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
