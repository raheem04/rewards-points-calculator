import React, { useState, useEffect } from 'react';
import './RewardCalculator.css'; // Ensure this CSS file exists

const RewardCalculator = () => {
    // State for customers and their transactions
    const [customers, setCustomers] = useState([]);
    const [amount, setAmount] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    
    // Mock Data
    const mockData = [
        {
            customerId: "1",
            customerName: "Customer A",
            transactions: []
        },
        {
            customerId: "2",
            customerName: "Customer B",
            transactions: []
        },
        {
            customerId: "3",
            customerName: "Customer C",
            transactions: []
        }
    ];

    // Load initial customers
    useEffect(() => {
        setCustomers(mockData);
    }, []);

    // Function to calculate rewards
    const calculateRewards = (amount) => {
        return Math.floor(amount / 1.00); // Example: 1 point per dollar
    };

    // Function to add a transaction
    const addTransaction = (customerId) => {
        if (amount && selectedDate) {
            const newTransaction = {
                transactionId: `TRX${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
                date: selectedDate,
                amount: parseFloat(amount),
            };
            const updatedCustomers = customers.map(customer => {
                if (customer.customerId === customerId) {
                    const pointsEarned = calculateRewards(newTransaction.amount);
                    return {
                        ...customer,
                        transactions: [...customer.transactions, newTransaction],
                        totalPoints: (customer.totalPoints || 0) + pointsEarned
                    };
                }
                return customer;
            });
            setCustomers(updatedCustomers);
            setAmount('');
            setSelectedDate('');
        } else {
            alert('Please enter both amount and date');
        }
    };

    return (
        <div className="reward-calculator">
            <h1>Reward Points Calculator</h1>
            <div className="add-transaction">
                <input 
                    type="number" 
                    placeholder="Enter amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <button onClick={() => addTransaction("1")}>Add Transaction for Customer A</button>
                <button onClick={() => addTransaction("2")}>Add Transaction for Customer B</button>
                <button onClick={() => addTransaction("3")}>Add Transaction for Customer C</button>
            </div>
            
            {customers.map(customer => (
                <div className="customer" key={customer.customerId}>
                    <h2>{customer.customerName}</h2>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Transactions</th>
                                    <th>Points Earned</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customer.transactions.length > 0 ? (
                                    customer.transactions.map(transaction => (
                                        <tr key={transaction.transactionId}>
                                            <td>{transaction.date}: ${transaction.amount.toFixed(2)}</td>
                                            <td>{calculateRewards(transaction.amount)}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="no-transactions" colSpan="2">No transactions</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RewardCalculator;
