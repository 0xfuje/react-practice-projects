import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className='Box'>
                <div className="Box-thing"
                style={{
                    backgroundColor: this.props.color,
                    width: this.props.width,
                    height: this.props.height
                }} />
                <button onClick={() => this.props.removeBox(this.props.id)}>Remove The Box!</button>
            </div>
        )
    }
}

export default Box;
