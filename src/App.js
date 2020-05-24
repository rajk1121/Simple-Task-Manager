import React, { Component } from 'react';
import './App.css';
import { ADD, TYPE, DELETE, INITIAL } from './actions';
class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.store.dispatch(INITIAL())
    // console.log(this.store.getState())

  }
  handleAdd = (e) => {
    this.store.dispatch(ADD());
    // console.log(this.store.getState())
  }
  handleChange = (e) => {
    this.store.dispatch(TYPE(e.currentTarget.value));
  }
  handleRemove = (e) => {
    this.store.dispatch(DELETE(e.target.getAttribute('name')));
  }
  render() {

    if (this.store.getState()) {
      var table = this.store.getState().arr.map((val, i) => {
        return (


          <tr key={i}>
            <td>{i + 1}</td>
            <td>{val}</td>
            <td><button className='btn-danger' onClick={this.handleRemove} name={i}>Remove</button></td>
          </tr>
        )
      })
    }
    return (
      <div className='container'>
        <h1>Welcome to Task Manager</h1>
        <input value={this.store.getState().text} onChange={this.handleChange}></input>
        <button className='btn-primary' onClick={this.handleAdd}>Add Task</button>
        <br></br>
        <table className='table'>
          <thead><tr><th>S. No</th><th>Description</th><th>Remove</th></tr></thead>
          <tbody>{table}</tbody>
        </table>

      </div>
    )
  }
}

export default App;
