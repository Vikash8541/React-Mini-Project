const Input = ({ textValue, setTextValue }) => {
    return (
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Enter your task..."
        className="w-full h-[50px] py-3.5 px-4 rounded-md border-none outline-none text-black bg-white placeholder-gray-500 shadow-sm"
      />
    );
  };
  
  export default Input;
  