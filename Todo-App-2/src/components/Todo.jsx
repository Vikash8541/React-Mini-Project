import React, { useState } from "react";
import TodoItems from "./TodoItems";
import TodoInput from "./TodoInput";

const Todo = () => {


const [value , setValue ] = useState("");
const [taskList , setTaskList] = useState([]);


const addTask = () =>{
   if(value.trim() === "") return;
   setTaskList([...taskList,value]);
   setValue(" ");
}

const removeTask = (index) =>{
  const updateTask = taskList.filter((_,i)=> i !==index);
  setTaskList(updateTask);
}

  return (
    <div className="todo-main">
      <h1 className="text-center my-5 font-bold text-3xl">TODO App</h1>
      <TodoInput  value={value} setValue={setValue} addTask={addTask}/>

      {/* List items */}

      <ul className="list-items flex items-center justify-center flex-col w-[500px] mx-auto h-auto rounded-md bg-purple-800 text-white p-2">
        {taskList.length > 0 ? (
          taskList.map((task,index)=>(
            <TodoItems key={index} task={task} index={index} removeTask ={removeTask}/>
          ))  
        ):(
          <p>The items is empty</p>
        )
        }


        </ul>
    </div>
  );
};4

export default Todo;