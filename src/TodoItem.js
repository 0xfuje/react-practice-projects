import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            todo: this.props.todo,
            isEditing: false,
        }
    }
    handleRemove(e) {
        this.props.remove(this.props.id);
    }
    handleEdit(e) {
        this.setState({ isEditing: true })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ isEditing: false });
        this.props.edit(this.props.id, this.state.todo);
    }
    handleChange(e) {
        this.setState({ todo: e.target.value });
    }
    
    render() {
        const edit = 
        <form className='TodoItem-edit' onSubmit={this.handleSubmit}>
            <input type="text"
                name='todo'
                placeholder={this.props.todo}
                onChange={this.handleChange}
            />
        <button>done</button>
        </form>
        return (
            <li className='TodoItem' style={{ display: 'flex' }}>
                <p>{(!this.state.isEditing) ? this.props.todo : edit}</p>
                <button onClick={this.handleRemove}>x</button>
                <button onClick={this.handleEdit}>edit</button>
            </li>
        )
    }
}

export default TodoItem;
