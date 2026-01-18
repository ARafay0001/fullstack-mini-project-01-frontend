import React, { useState } from "react";

const Panel = ({ onAdd }) => {
  // State to store input value
  const [task, setTask] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request to backend
    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: task }),
    })
      .then(res => res.json())
      .then(data => {
        // Update parent component state
        onAdd(data.data);
        setTask(""); // clear input
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-w-96 bg-amber-100 p-3 flex justify-center items-center">
        <input
          className="bg-amber-50 h-8 rounded-lg pl-3"
          type="text"
          placeholder="Add task here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-green-100 bg-green-500 px-3 py-1 rounded-lg ml-3"
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default Panel;
