export const TransactionItem = ({item: {id, type, amount, currency}}) => {
  return <tr key={id}>
    <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
  </tr>
}