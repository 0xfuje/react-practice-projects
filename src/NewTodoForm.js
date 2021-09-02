import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ todo: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.add(this.state.todo);
        this.setState({ todo: '' })
    }
    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <input type="text" name='todo' value={this.state.todo} placeholder='Add a New Todo' onChange={this.handleChange}/>
                <button>+</button>
            </form>
        )
    }
}

export default NewTodoForm;
