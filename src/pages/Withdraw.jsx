import { useState, useContext, useRef, useEffect } from 'react';
import { BankContext } from '../context/BankContext';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { balance, addTransaction } = useContext(BankContext);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    const val = parseFloat(amount);
    if (!amount || isNaN(val) || val <= 0) {
      setError('Please enter a valid amount greater than zero.');
      return;
    }

    if (val > balance) {
      setError('Insufficient Funds! Withdrawal exceeds your current balance.');
      return;
    }

    if (!window.confirm(`Are you sure you want to withdraw $${val.toFixed(2)}?`)) {
      return;
    }

    addTransaction('Withdrawal', val);
    setMessage(`Successfully withdrew $${val.toFixed(2)}!`);
    setAmount('');
  };

  return (
    <div>
      <h2>Withdraw Money</h2>
      <div className="card" style={{ maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Withdrawal Amount ($)</label>
            <input
              ref={inputRef}
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#e11d48' }}>Withdraw</button>
        </form>
        {message && <div className="success-msg">{message}</div>}
        {error && <div className="error-msg">{error}</div>}
      </div>
    </div>
  );
};

export default Withdraw;