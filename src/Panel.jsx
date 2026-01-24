import React, { useRef } from "react";
// import { useState } from "react";

const Panel = ({func}) => {
  const input =  useRef()
  
  function handleAddTask(event) {
    event.preventDefault();
    const task = input.current.value
    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: task }),
    }).then(() =>(func()))
    
  }
  return (
    <form onSubmit={handleAddTask}>
      <div className="min-w-96 bg-amber-100 p-3 flex justify-center items-center">
        <input
          ref={input}
          className="bg-amber-50 h-8 rounded-lg pl-3"
          type="text"
          placeholder="Add task here"
         
          
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
