import React, { Component } from 'react';
import BudgetEntry from './BudgetEntry';
import BudgetForm from './BudgetForm';
import { id } from './helper';
import './css/BudgetList.scss';

class BudgetList extends Component {
    static defaultProps = {
        currency: '$'
    }
    constructor(props) {
        super(props);
        
        this.state = {
             budgetList: [
                 {date: '2021-09-01', description: 'trading profit', change:'300', id: id()},
                 {date: '2021-09-02', description: 'lidl shopping', change:'-30', id: id()},
                 {date: '2021-09-05', description: 'chilis burger', change:'-50', id: id()},
             ]
        }
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
        this.sortDates = this.sortDates.bind(this);
        this.sortDates();
    }

    add(entry) {
        const budgetList = this.state.budgetList;
        const newEntry = {...entry, id: id()};
        const newBudgetList = [...budgetList, newEntry];
        this.setState({ budgetList: newBudgetList }, () => this.sortDates());
        
    }
    remove(id) {
        const budgetList = this.state.budgetList;
        const newBudgetList = budgetList.filter((e) => (e.id !== id))
        this.setState({ budgetList: newBudgetList });
    }
    edit(id, nEntry) {
        const budgetList = this.state.budgetList;
        const newEntry = {...nEntry, id: id};
        const entryRemovedList = budgetList.filter((e) => e.id !== id);
        const newBudgetList = [...entryRemovedList, newEntry];
        this.setState({ budgetList: newBudgetList }, () => this.sortDates());
    }
    sortDates() {
        const budgetList = this.state.budgetList;
        const budgetListSorted = budgetList.sort((a, b) => new Date (b.date) - new Date (a.date));
        this.setState({ budgetList: budgetListSorted })
    }
    calcTotal() {
        const budgetList = this.state.budgetList;
        const balances = budgetList.map((e) => Number(e.change));
        const total = balances.reduce((acc, cur) => acc + cur);
        return total;
    }

    render() {
        const budgetList = this.state.budgetList.map((entry) => {
            return <BudgetEntry
                key={entry.id}
                id={entry.id}
                date={entry.date} 
                description={entry.description} 
                change={entry.change}
                edit={this.edit}
                remove={this.remove}
                currency={this.props.currency}
            />
        })
        return (
            <div className="BudgetList">
                <h1 className='main-title'>Pocket Saver 2000</h1>
                <BudgetForm add={this.add} />
                <h2 className='secondary-title'>Last transactions</h2>
                <table className='BudgetTable'>
                    <thead>
                        {/* <tr>
                            <td>Date</td>
                            <td>Description</td>
                            <td>Income / Expense</td>
                        </tr> */}
                    </thead>
                    <tbody>
                    {budgetList}
                    </tbody>
                </table>
                <h2 class='balance-title'>Total Balance: {this.calcTotal()}{this.props.currency}</h2>

            </div>
            
        )
    }
}

export default BudgetList;
