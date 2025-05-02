import React from "react";

const IncomeExpensive = () => {
    return (
      <div className="flex justify-between text-center bg-gray-50 p-4 rounded-lg shadow-inner">
        <div className="w-1/2">
          <h4 className="text-sm font-semibold text-gray-500">Income</h4>
          <p className="text-green-600 font-bold text-lg">+$0.00</p>
        </div>
        <div className="w-1/2 border-l border-gray-300">
          <h4 className="text-sm font-semibold text-gray-500">Expense</h4>
          <p className="text-red-500 font-bold text-lg">-$0.00</p>
        </div>
      </div>
    );
  };
  

export default IncomeExpensive;
