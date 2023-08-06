import { TransactionItem } from "../TransactionItem/TransactionItem";
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({items}) => {
  return <table className={css.transactionHistory}>
  <thead>
    <tr className={css.rowHead}>
      <th className={css.headItem}>Type</th>
      <th className={css.headItem}>Amount</th>
      <th className={css.headItem}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (
      <TransactionItem item={item} />
    ))}
  </tbody>
</table>
}