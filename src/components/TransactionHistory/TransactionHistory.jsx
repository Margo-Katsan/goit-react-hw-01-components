import { TransactionItem } from "../TransactionItem/TransactionItem";
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({items}) => {
  return <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (
      <TransactionItem item={item} />
    ))}
  </tbody>
</table>
}