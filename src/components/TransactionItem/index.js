// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionHistory, deleteTransactionHistory} = props
  const {id, title, amount, type} = transactionHistory
  const onDeleteTran = () => {
    deleteTransactionHistory(id)
  }
  return (
    <li className="history-details-container">
      <p className="history-element">{title}</p>
      <p className="history-element">Rs {amount}</p>
      <p className="history-element">{type}</p>
      <button type="button" className="delete-button" onClick={onDeleteTran}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-icon"
          alt="delete"
          testid="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
