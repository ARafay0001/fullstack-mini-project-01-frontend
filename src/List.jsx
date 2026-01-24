import React from "react";

const List = ({tasks}) => {
  return (
    <div className="w-75 m-auto mt-3 p-3 bg-amber-200">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className="bg-amber-50 mb-2 p-2 flex justify-between"
        >
          <p>{index + 1}. {task.title}</p>
          <button
           
            className="bg-red-400 px-3 text-white font-bold"
          >
            del
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
