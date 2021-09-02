import React, { Component } from 'react'

class NewBoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: '',
            width: '',
            height: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addBox(this.state);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='color'>  Color: </label>
                <input name='color' type="text" onChange={this.handleChange} value={this.state.color}/>
                <label htmlFor='width'>  Width: </label>
                <input name='width' type="text" onChange={this.handleChange} value={this.state.width}/>
                <label htmlFor='height'>  Height: </label>
                <input name='height' type="text" onChange={this.handleChange} value={this.state.height}/>
                <br/><button>Add Shit!</button>
            </form>
            
        )
    }
}

export default NewBoxForm
