import React, { Component } from 'react';

class BudgetEntry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date: this.props.date,
            description: this.props.description,
            change: this.props.change,
            isEditing : false,
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleEdit() {
        this.setState({ isEditing: true });
    }
    handleRemove() {
        this.props.remove(this.props.id);
    }
    handleUpdate(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ isEditing: false })
        const nEntry = {
            date: this.state.date,
            description: this.state.description,
            change: this.state.change
        }
        this.props.edit(this.props.id, nEntry);
    }
    
    render() {
        const editEntry = 
        <tr className='BudgetEntry-Edit'>
            <form id='formEdit' ><input type="hdden" name='id'/></form>
            <td><input name='date' type="text" onChange={this.handleUpdate} placeholder={this.state.date}/></td>
            <td><input name='description' type="text" onChange={this.handleUpdate} placeholder={this.state.description}/></td>
            <td><input name='change' type="text" onChange={this.handleUpdate} placeholder={this.state.change}/></td>
            <td><button onClick={this.handleSubmit}>Done</button></td>
            <td><button onClick={this.handleRemove}>X</button></td>
        </tr>
        
        const entry = 
        <tr className='BudgetEntry'>
            <td>{this.props.date}</td>
            <td>{this.props.description}</td>
            <td>{this.props.change}</td>
            <td><button onClick={this.handleEdit}>Edit</button></td>
            <td><button onClick={this.handleRemove}>X</button></td>
        </tr>
        return (
            (this.state.isEditing === false) ? entry : editEntry
        )
    }
}

export default BudgetEntry;
