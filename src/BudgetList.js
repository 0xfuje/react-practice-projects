import React, { Component } from 'react';
import BudgetEntry from './BudgetEntry';
import BudgetForm from './BudgetForm';
import { id } from './helper';

class BudgetList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             budgetList: [
                 {date: '2021/9/1', description: 'trading profit', change:'+300$', id: id()},
                 {date: '2021/9/2', description: 'lidl shopping', change:'-30$', id: id()},
                 {date: '2021/9/5', description: 'chilis burger', change:'-50$', id: id()},
             ]
        }
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }

    add(entry) {
        const budgetList = this.state.budgetList;
        const newEntry = {...entry, id: id()};
        const newBudgetList = [...budgetList, newEntry];
        this.setState({ budgetList: newBudgetList });
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
        this.setState({ budgetList: newBudgetList });
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
            />
        })
        return (
            <div className="BudgetList">
                <BudgetForm add={this.add} />
                <table className='BudgetTable'>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Description</td>
                            <td>Income / Expense</td>
                        </tr>
                    </thead>
                    <tbody>
                    {budgetList}
                    </tbody>
                </table>
            </div>
            
        )
    }
}

export default BudgetList;
