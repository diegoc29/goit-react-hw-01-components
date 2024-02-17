import React from "react";
import styles from './TransactionHitory.module.css'

const TransactionHistory = ({TransactionHistory}) => {
    return (
        <table className={styles.transactionhistory}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                <td>Invoice</td>
                <td>125</td>
                <td>USD</td>
                </tr>
                <tr>
                <td>Withdrawal</td>
                <td>85</td>
                <td>USD</td>
                </tr>

                {TransactionHistory.map((transaction) => (
                <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
                ))}
            </tbody>
        </table>

    )
}

export default TransactionHistory; 
