import React from "react";

const History = () => {
    return (
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b pb-1">History</h3>
        <ul className="space-y-2">
          <li className="bg-white p-3 rounded-lg flex justify-between items-center shadow border-r-4 border-red-400">
            <span className="text-gray-700">Cash</span>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-semibold">-$400</span>
              <button className="text-red-400 hover:text-red-600 transition">✕</button>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  

export default History;
