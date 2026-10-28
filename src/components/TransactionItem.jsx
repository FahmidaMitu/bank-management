const TransactionItem = ({ transaction }) => {
  const isDeposit = transaction.type === 'Deposit';
  return (
    <tr>
      <td>
        <span className={isDeposit ? 'badge-deposit' : 'badge-withdrawal'}>
          {transaction.type}
        </span>
      </td>
      <td>${transaction.amount.toFixed(2)}</td>
      <td>{transaction.date}</td>
    </tr>
  );
};

export default TransactionItem;