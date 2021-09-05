import React, { Component } from 'react';

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
                <input name='date' type="text" onChange={this.handleChange}/>
                <input name='description' type="text" onChange={this.handleChange}/>
                <input name='change' type="text" onChange={this.handleChange}/>
                <button>add</button>
            </form>
        )
    }
}

export default BudgetForm;
