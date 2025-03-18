import React, { useState } from "react";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("black");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const bmiData = (e) => {
    e.preventDefault();

    const heightInMeters = parseFloat(height) / 100; 
    const weightInKg = parseFloat(weight);

    if (!heightInMeters || !weightInKg) {
      alert("Please enter valid height and weight values");
      return;
    }

    const calculatedBmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

    if (calculatedBmi < 17) {
      setColor("red");
      setMessage("Underweight");
    } else if (calculatedBmi >= 17 && calculatedBmi < 25) {
      setColor("yellow");
      setMessage("Normal");
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      setColor("red");
      setMessage("Overweight");
    } else {
      setColor("maroon");
      setMessage("Obese");
    }

    setBmi(calculatedBmi);
  };

  const resetData = () => {
    setHeight("");
    setWeight("");
    setColor("black");
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          BMI Calculator
        </h1>
        <form className="space-y-4" onSubmit={bmiData}>
          <div>
            <label htmlFor="height" className="block text-gray-900 mb-1">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              className="w-full p-2 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-gray-900 mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-[48%] bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={resetData}
              className="w-[48%] bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Reload
            </button>
          </div>
        </form>
        {bmi !== null && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Your BMI: <span className="text-purple-600">{bmi}</span>
            </h2>
            <p className="text-gray-900">
              You are{" "}
              <span className="font-semibold" style={{ color }}>
                {message}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMI;
