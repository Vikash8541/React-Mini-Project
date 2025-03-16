import React from "react";

const TodoItems = ({ task, index , removeTask }) => {
  return (
    
        <li className="flex items-center justify-between w-full py-2 px-3" key={index}>
          <span className="bg-white text-black w-full mr-5 p-3 rounded-md">
            {task}
          </span>
          <button onClick={()=>removeTask(index)} className="bg-red-700 text-white p-3 rounded-md ">
            Remove
          </button>
        </li>
  );
};

export default TodoItems;
