import { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  // LocalStorage theke data reload/get kora
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem('bank_balance');
    return savedBalance !== null ? parseFloat(savedBalance) : 4500.0;
  });

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('bank_transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [
      { id: 1, type: 'Deposit', amount: 100.0, date: '2026-02-18' },
      { id: 2, type: 'Deposit', amount: 7000.0, date: '2026-02-18' },
      { id: 3, type: 'Withdrawal', amount: 2500.0, date: '2026-05-18' },
    ];
  });

  // LocalStorage-e auto-save kora
  useEffect(() => {
    localStorage.setItem('bank_balance', balance);
    localStorage.setItem('bank_transactions', JSON.stringify(transactions));
  }, [balance, transactions]);

  const totalDeposits = transactions
    .filter(t => t.type === 'Deposit')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalWithdrawals = transactions
    .filter(t => t.type === 'Withdrawal')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const addTransaction = (type, amount) => {
    const newTx = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0],
    };

    setTransactions([newTx, ...transactions]);

    if (type === 'Deposit') {
      setBalance(prev => prev + parseFloat(amount));
    } else {
      setBalance(prev => prev - parseFloat(amount));
    }
  };

  return (
    <BankContext.Provider
      value={{
        balance,
        transactions,
        totalDeposits,
        totalWithdrawals,
        addTransaction,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};