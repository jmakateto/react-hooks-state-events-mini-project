import React from "react";

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <p>{task.text}</p>
      <p>{task.category}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;
