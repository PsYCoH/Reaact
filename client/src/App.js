import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { UserLogin } from './components/UserLogin';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
    return (
        <GlobalProvider>
        <Header />
        <UserLogin />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;
