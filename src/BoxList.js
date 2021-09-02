import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             boxes: [
                 {color: 'purple', width: '100px', height: '100px', id: uuidv4(), key:uuidv4()},
                 {color: 'black', width: '250px', height: '150px', id: uuidv4(), key:uuidv4()},
                 {color: 'grey', width: '550px', height: '50px', id: uuidv4(), key:uuidv4()},
             ]
        }
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }
    
    addBox(box) {
        let newBox = {...box, id: uuidv4()};
        this.setState(oldSt => ({
            boxes: [...this.state.boxes, newBox]
        }))
    }
    removeBox(id) {
        const newBoxes = this.state.boxes.filter((box) => box.id !== id);
        console.log(newBoxes);
        this.setState({ boxes: newBoxes });
    }
    
    render() {
        const boxes = this.state.boxes.map((b) => {
            return (
            <Box 
                color={b.color}
                width={b.width}
                height={b.height}
                id={b.id}
                key={b.id}
                removeBox={this.removeBox}
            />);
        })
        return (
            <div className="BoxList">
                <NewBoxForm addBox={this.addBox} />
                {boxes}
            </div>
        );
    }
}

export default BoxList;
