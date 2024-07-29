import css from './Transaction.module.css';

const Transaction = ({ key, type, amount, currency }) => (
  <tr className={css.transaction} key={key}>
    <td className={css.type}>{type}</td>
    <td className={css.amount}>{amount}</td>
    <td className={css.currency}>{currency}</td>
  </tr>
);

export default Transaction;
