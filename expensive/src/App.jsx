import React from 'react'
import Header from "./components/Header";
import Balance from './components/Balance';
import IncomeExpensive from './components/IncomeExpensive';
import History from './components/History';
import AddTransaction from './components/AddTransaction';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 space-y-6">
        <Header />
        <Balance />
        <IncomeExpensive />
        <History />
        <AddTransaction />
      </div>
    </div>
  );
};


export default App
