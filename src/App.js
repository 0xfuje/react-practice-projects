import React, { Component } from 'react';
import BudgetList from './BudgetList';
import './css/App.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BudgetList />
      </div>
    )
  }
}

export default App;
