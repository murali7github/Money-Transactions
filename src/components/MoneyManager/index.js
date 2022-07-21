import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionHistory: [],
    titleIn: '',
    amountIn: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {titleIn, amountIn, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleIn,
      amount: parseInt(amountIn),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionHistory: [...prevState.transactionHistory, newTransaction],
      titleIn: '',
      amountIn: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({titleIn: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountIn: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  getBalanceAmount = () => {
    const {transactionHistory} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionHistory.forEach(eachTran => {
      if (eachTran.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTran.amount
      } else {
        expensesAmount += eachTran.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  getIncomeAmount = () => {
    const {transactionHistory} = this.state
    let incomeAmount = 0
    transactionHistory.forEach(eachTran => {
      if (eachTran.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTran.amount
      }
    })

    return incomeAmount
  }

  getExpensesAmount = () => {
    const {transactionHistory} = this.state
    let expensesAmount = 0

    transactionHistory.forEach(eachTran => {
      if (eachTran.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTran.amount
      }
    })

    return expensesAmount
  }

  deleteTransactionHistory = id => {
    const {transactionHistory} = this.state
    const updatedTransactionHistory = transactionHistory.filter(
      eachTran => id !== eachTran.id,
    )
    this.setState({transactionHistory: updatedTransactionHistory})
  }

  render() {
    const {transactionHistory, titleIn, amountIn, optionId} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()
    return (
      <div className="bg-container">
        <div className="card-one-container">
          <div className="titles-container">
            <h1 className="title-heading">Hi, Richard</h1>
            <p className="title-description">
              Welcome back to your{' '}
              <span className="span-element">Money Manager</span>
            </p>
          </div>
        </div>
        <MoneyDetails
          transactionTypeOptions={transactionTypeOptions}
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="main-container">
          <div className="side-form-container">
            <h1 className="form-heading">Add Transaction</h1>
            <form onSubmit={this.onClickAddButton}>
              <div className="input-container">
                <label htmlFor="title" className="label-element">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  value={titleIn}
                  className="input-element"
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="input-container">
                <label htmlFor="amount" className="label-element">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  type="text"
                  value={amountIn}
                  className="input-element"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="input-container">
                <label htmlFor="select" className="label-element">
                  TYPE
                </label>
                <select
                  id="select"
                  value={optionId}
                  className="select-element"
                  onChange={this.onChangeType}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="side-history-container">
            <h1 className="history-heading">History</h1>
            <div>
              <ul className="history-list-container">
                <li className="history-list-item-container">
                  <p className="history-titles">Title</p>
                  <p className="history-titles">Amount</p>
                  <p className="history-titles">Type</p>
                </li>
                {transactionHistory.map(eachTransaction => (
                  <TransactionItem
                    transactionHistory={eachTransaction}
                    key={eachTransaction.id}
                    deleteTransactionHistory={this.deleteTransactionHistory}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
