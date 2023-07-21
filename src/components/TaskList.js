import React from "react";
import Task from "./Task"; 

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => deleteTask(task.id)} />
      ))}
    </div>
  );
}

export default TaskList;
