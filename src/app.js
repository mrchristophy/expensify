import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from "./actions/filter";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 100,
    createdAt: 2345643567
}));

store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 530,
    createdAt: 234564567
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 980,
    createdAt: 234564567
}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));