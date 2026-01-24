import { useEffect, useState } from "react";
import React from "react";
import Panel from "./Panel";
import List from "./List";

const App = () => {

  const [tasks, setTasks] = useState([])

  function fetchTasks() {
     fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => {console.log(data.data);
        setTasks(data.data)})
  }

  useEffect(() => {
    fetchTasks()
  } , []);
  return (
    <div>
      <Panel func={fetchTasks} />
      <List tasks={tasks} func={fetchTasks} />
    </div>
  );
};

export default App;
