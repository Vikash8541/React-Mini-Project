import React from "react";


const TodoInput = ({value , setValue , addTask}) => {

    

  return (
    <div className="input-button flex items-center justify-center w-full mx-auto gap-4 my-5">
      <input
        type="text"
        placeholder="Enter you text"
        value={value} onChange={(e)=> setValue(e.target.value)}
        className="p-3 rounded-md border-none outline-none w-[300px] text-black"
      />
      <button

       onClick={addTask}
       className="bg-green-700 text-white font-semibold text-xl p-3 rounded-md">
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
