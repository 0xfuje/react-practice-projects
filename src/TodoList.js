import React, { Component } from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';



class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: [
                 {todo: 'walk my cat', id: uuid()},
                 {todo: 'feed my dog', id: uuid()},
                 {todo: 'play my piano', id: uuid()}
             ]
        }
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
    }
    add(newTodo) {
        const todo = {todo: newTodo, id: uuid()}
        this.setState({ todos: [...this.state.todos, todo]})
    }
    edit(id, nTodo) {
        const oldTodoList = [...this.state.todos];
        const newTodo = {todo: nTodo, id: uuid()};
        const oldTodoRemoved =  oldTodoList.filter((t) => t.id !== id);
        const newTodoList = [...oldTodoRemoved, newTodo]
        this.setState({ todos: newTodoList })
    }
    remove(id) {
        const oldTodoList = [...this.state.todos];
        const newTodoList = oldTodoList.filter((t) => t.id !== id);
        this.setState({ todos: newTodoList });
    }
    
    render() {
        const todos = this.state.todos.map((t) => {
            return <TodoItem 
                todo={t.todo}
                id={t.id}
                key={t.id}
                remove={this.remove}
                edit={this.edit}
            />
        })
        return (
            <ul className="TodoList">
                <h1>Extremely ugly but functional to-do list</h1>
                {todos}
                <NewTodoForm add={this.add} />
            </ul>
            
        )
    }
}

export default TodoList;
