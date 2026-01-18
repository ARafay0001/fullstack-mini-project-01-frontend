import React, { useEffect, useState } from "react";
import Panel from "./Panel";
import List from "./List";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on load
  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data.data))
      .catch(err => console.error(err));
  }, []);

  // Delete task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => setTasks(data.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Panel onAdd={setTasks} />
      <List tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
