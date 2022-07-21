// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {
    transactionTypeOptions,
    balanceAmount,
    incomeAmount,
    expensesAmount,
  } = props
  return (
    <div className="list-item-direction">
      <div className="list-item-container list-item-one">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div className="title-container">
          <p className="list-item-title-para">Your Balance</p>
          <p className="list-item-money-para" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="list-item-container list-item-two">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div className="title-container">
          <p className="list-item-title-para">
            Your {transactionTypeOptions[0].displayText}
          </p>
          <p className="list-item-money-para" testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="list-item-container list-item-three">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          className="image"
          alt="expenses"
        />
        <div className="title-container">
          <p className="list-item-title-para">
            Your {transactionTypeOptions[1].displayText}
          </p>
          <p className="list-item-money-para" testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
