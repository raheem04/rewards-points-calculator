// src/RewardCalculator.jsx
import React, { useState } from 'react';

const RewardCalculator = () => {
  const [amount, setAmount] = useState('');

  const handleAddTransaction = () => {
    // Logic for calculating reward points based on the amount
    console.log(`Transaction of amount: ${amount} added.`);
    // Reset the input
    setAmount('');
  };

  return (
    <div className="reward-calculator">
      <h1>Reward Points Calculator</h1>
      <div className="add-transaction">
        <input
          placeholder="Enter amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </div>
      {/* Here you can add more UI elements as needed */}
    </div>
  );
};

export default RewardCalculator;
