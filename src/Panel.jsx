import React from "react";
// import { useState } from "react";

const Panel = () => {
  //

  return (
    <form >
      <div className="min-w-96 bg-amber-100 p-3 flex justify-center items-center">
        <input
          className="bg-amber-50 h-8 rounded-lg pl-3"
          type="text"
          placeholder="Add task here"
          // value={task}
          
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
