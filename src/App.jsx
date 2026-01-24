import { useEffect, useState } from "react";
import React from "react";
import Panel from "./Panel";
import List from "./List";

const App = () => {

  const {tasks, setTasks} = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .then((data) => console.log(data));
  } , []);
  return (
    <div>
      <Panel />
      <List tasks={tasks} />
    </div>
  );
};

export default App;
