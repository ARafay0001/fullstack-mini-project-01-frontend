import React from 'react'

const Panel = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const task = document.getElementById('task').value;
        fetch('http://localhost:5000/addtask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ task }),
        })
      }}
    >
      <div className="min-w-96 bg-amber-100 p-3 flex justify-center items-center">
        <input
          className="bg-amber-50 h-8 rounded-lg pl-3"
          type="text"
          name="task"
          id="task"
          placeholder="Add task here"
          required
        />
        <button
          type="submit"
          className="text-green-100 bg-green-500 px-3 py-1 rounded-lg ml-3 hover:bg-green-200 hover:text-green-500 transition-colors duration-200"
        >
          ADD
        </button>
      </div>
    </form>
  )
}

export default Panel
