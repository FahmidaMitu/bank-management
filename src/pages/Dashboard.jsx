import { useContext } from 'react';
import BalanceCard from '../components/BalanceCard';
import TransactionItem from '../components/TransactionItem';
import { BankContext } from '../context/BankContext';

const Dashboard = () => {
  const { transactions } = useContext(BankContext);
  const recentTransactions = transactions.slice(0, 5);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="card-grid">
        <BalanceCard />
        <div className="card">
          <h3>Recent Transactions</h3>
          {transactions.length === 0 ? (
            <p style={{ color: '#94a3b8', marginTop: '1rem' }}>No transactions found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map(tx => (
                  <TransactionItem key={tx.id} transaction={tx} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;