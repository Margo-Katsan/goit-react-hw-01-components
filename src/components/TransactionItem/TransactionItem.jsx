import css from "./TransactionItem.module.css"

export const TransactionItem = ({ item: { id, type, amount, currency } }) => {
  return <tr key={id} className={css.rowBody}>
    <th className={css.bodyItem}>{type}</th>
    <th className={css.bodyItem}>{amount}</th>
    <th className={css.bodyItem}>{currency}</th>
  </tr>
}