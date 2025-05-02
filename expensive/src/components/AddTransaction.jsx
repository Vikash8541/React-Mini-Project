import React, { useState } from 'react'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
  
    return (
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Add new transaction</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="text" className="block text-sm text-gray-600 mb-1">Text</label>
            <input
              type="text"
              id="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm text-gray-600 mb-1">
              Amount <span className="block text-xs text-gray-400">(negative - expense, positive - income)</span>
            </label>
            <input
              type="number"
              id="amount"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-medium py-2 rounded hover:bg-purple-700 transition"
          >
            Add transaction
          </button>
        </form>
      </div>
    );
  };
  

export default AddTransaction
