import React from 'react';
import moment from 'moment';
import "react-dates/initialize";
import {SingleDatePicker} from "react-dates";

const now = moment();


export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? props.expense.createdAt : 1234,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        this.setState(() => ({amount}));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please enter a value'
            }));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: 2345,
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                    {this.state.error && <p>{this.state.error}</p>}

                    <div>
                        <input
                            type="text"
                            placeholder="description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </div>

                    <div>
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                    >

                    </textarea>
                    </div>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
