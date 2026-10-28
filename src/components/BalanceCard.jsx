import { useContext } from 'react';
import { BankContext } from '../context/BankContext';

const BalanceCard = () => {
  const { balance, totalDeposits, totalWithdrawals } = useContext(BankContext);

  return (
    <div className="card">
      <h3>Account Overview</h3>
      <p style={{ color: '#94a3b8', margin: '0.5rem 0' }}>Account Holder: <strong>Fahmida Sultana</strong></p>
      <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>Account Number: <strong>123456789</strong></p>

      <div style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Current Balance:</span>
        <h2 style={{ color: '#4ade80', margin: '0.2rem 0 0 0' }}>${balance.toFixed(2)}</h2>
      </div>

      <p style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
        <span>Total Deposits:</span> <strong style={{ color: '#4ade80' }}>${totalDeposits.toFixed(2)}</strong>
      </p>
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Total Withdrawals:</span> <strong style={{ color: '#f87171' }}>${totalWithdrawals.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default BalanceCard;