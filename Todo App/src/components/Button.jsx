const Button = ({ addTask }) => {
  return (
    <button
      onClick={addTask}
      className="bg-green-600 text-white w-[150px] border-none text-lg font-bold outline-none py-3 px-4 rounded-md shadow-md hover:bg-green-700 transition"
    >
      Add Task
    </button>
  );
};

export default Button;
