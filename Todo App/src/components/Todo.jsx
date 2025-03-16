import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [tasks, setTasks] = useState([]); 
  const [textValue, setTextValue] = useState(""); 


  console.log(textValue)

  const addTask = () => {
    if (textValue.trim() === "") return; 
    setTasks([...tasks, textValue]); 
    setTextValue(""); 
  };

  // Function to remove a task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold capitalize text-green-500 mt-5 mb-10">
        Todo List App
      </h1>

      <div className="todo-box bg-gray-200 w-1/2 mx-auto shadow-xl p-10 rounded-md text-black flex items-center justify-center flex-col gap-4">
        <h1 className="text-3xl font-bold">Todo Items</h1>

        {/* Input Field & Button */}
        <div className="input-task flex items-center justify-between w-full gap-5 my-5">
          <Input textValue={textValue} setTextValue={setTextValue} />
          <Button addTask={addTask} />
        </div>

        {/* Task List */}
        <ul className="w-full space-y-3">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <TodoItems key={index} task={task} index={index} removeTask={removeTask} />
            ))
          ) : (
            <p className="text-center text-gray-500">No tasks yet. Add some!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
