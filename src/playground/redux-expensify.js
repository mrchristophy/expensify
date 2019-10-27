import {createStore, combineReducers} from "redux";
import uuid from 'uuid';


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(state);
    console.log('Visible', visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 100,
    createdAt: 2345643567
}));
store.dispatch(addExpense({
    description: 'Coffee',
    amount: 200,
    createdAt: 1
}));

store.dispatch(setStartDate(1));
store.dispatch(sortByAmount());
//store.dispatch(setTextFilter('rent'));

/**
 store.dispatch(removeExpense({
    id: expenseOne.expense.id
}));


 store.dispatch(editExpense(expenseOne.expense.id, {amount: 50000}));



 store.dispatch(sortByAmount());
 store.dispatch(sortByDate());

 store.dispatch(setStartDate(123));
 store.dispatch(setEndDate(234));
 **/