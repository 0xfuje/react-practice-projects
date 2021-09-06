import React, { Component } from 'react';
import './css/BudgetForm.scss';

class BudgetForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date: '',
             description: '',
             change: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({ date: '', description: '', change: ''})
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <form className='BudgetForm' onSubmit={this.handleSubmit}>
                <div className="date-container">
                    <label htmlFor="date">Date: </label>
                    <input className='input date-input' name='date' type="text" onChange={this.handleChange}/>
                </div>
                <div className="description-container">
                    <label htmlFor="description">Description: </label>
                    <input className='input description-input' name='description' type="text" onChange={this.handleChange}/>
                </div>
                <div className="change-container">
                    <label htmlFor="change">Change: </label>
                    <input className='input change-input' name='change' type="text" onChange={this.handleChange}/>
                </div>
                <button className='button'>Add New Transaction</button>
            </form>
        )
    }
}

export default BudgetForm;
