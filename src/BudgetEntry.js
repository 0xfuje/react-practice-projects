import React, { Component } from 'react';
import './css/BudgetEntry.scss';

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
        const numberClass = (Number(this.props.change.slice(0, -1)) > 0) ? 'positive' : 'negative';
        const editEntry = 
        <tr className='BudgetEntry-Edit'>
            <form id='formEdit'><input type="hidden" name='id'/></form>
            <div className="left">
                <td><input className='input' name='date' type="text" onChange={this.handleUpdate} placeholder={this.state.date}/></td>
                <td><input className='input' name='description' type="text" onChange={this.handleUpdate} placeholder={this.state.description}/></td>
            </div>
            <div className="right">
                <td><input className='input' name='change' type="text" onChange={this.handleUpdate} placeholder={this.state.change}/></td>
                <td><i className='fas fa-check-circle' onClick={this.handleSubmit}></i></td>
                <td><i className='fas fa-trash' onClick={this.handleRemove}></i></td>
            </div>
        </tr>
        
        const entry = 
        <tr className='BudgetEntry'>
            <div className='left'>
                <td className='description'>{this.props.description}</td>
                <td className='date'>{this.props.date}</td>
            </div>
            <div className="right">
                <td className={`${numberClass} change`}>{this.props.change}{this.props.currency}</td>
                <td><i className='fas fa-edit' onClick={this.handleEdit}></i></td>
                <td><i className='fas fa-trash' onClick={this.handleRemove}></i></td>
            </div>
           
        </tr>
        return (
            (this.state.isEditing === false) ? entry : editEntry
        )
    }
}

export default BudgetEntry;
