const TodoItems = ({ task, index, removeTask }) => {
  return (
    <li className="list-todo p-3 rounded-md w-full bg-gray-100 text-black flex items-center justify-between shadow-md">
      <div className="list flex items-center gap-3">
        <input type="checkbox" className="h-[20px] w-[20px] cursor-pointer" />
        <span className="text-lg font-medium">{task}</span>
      </div>
      <button
        onClick={() => removeTask(index)}
        className="bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700 transition"
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItems;
