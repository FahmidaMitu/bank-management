import { useContext } from 'react';
import TransactionItem from '../components/TransactionItem';
import { BankContext } from '../context/BankContext';

const Transactions = () => {
  const { transactions } = useContext(BankContext);

  return (
    <div>
      <h2>Transaction History</h2>
      <div className="card">
        {transactions.length === 0 ? (
          <p style={{ color: '#94a3b8', textAlign: 'center', padding: '2rem' }}>No transaction history available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Transaction Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <TransactionItem key={tx.id} transaction={tx} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Transactions;