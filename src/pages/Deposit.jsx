import { useState, useContext, useRef, useEffect } from 'react';
import { BankContext } from '../context/BankContext';

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { addTransaction } = useContext(BankContext);

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

    addTransaction('Deposit', val);
    setMessage(`Deposit of $${val.toFixed(2)} successful!`);
    setAmount('');
  };

  return (
    <div>
      <h2>Deposit Money</h2>
      <div className="card" style={{ maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Amount to Deposit ($)</label>
            <input
              ref={inputRef}
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <button type="submit">Deposit</button>
        </form>
        {message && <div className="success-msg">{message}</div>}
        {error && <div className="error-msg">{error}</div>}
      </div>
    </div>
  );
};

export default Deposit;