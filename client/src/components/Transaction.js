import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas, formatDate } from '../utils/format';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <div className="textTitle">
                {transaction.text}
            </div>
            <br/>
            {formatDate(transaction.createdAt)}
            <span>{sign}Php{numberWithCommas(Math.abs(transaction.amount))}</span>
            <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li>
    )
}
