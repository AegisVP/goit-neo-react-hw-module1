import css from './TransactionHistory.module.css';
import Transaction from './Transaction/Transaction';

const TransactionHistory = ({ items = [] }) => (
  <table className={css.table}>
    <thead className={css.head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={css.body}>
      {items.map(({ id, type, amount, currency }) => (
        <Transaction key={id} type={type} amount={amount} currency={currency} />
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
