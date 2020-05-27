import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'reactstrap';
import top5Data from '../../top5Rev.json';

class table extends Component {
    state = {
    data : []
  }

  componentDidMount() {
    this.setState({
      todos: top5Data
    });
  }

  render() {
    const { todos = [] } = this.state;
    return (
      <div className="App">
      <h3> Top 5 Revenue </h3>
      <header className="App-header">
          <Table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Revenue</th>
                <th>Per Person $</th>
                <th>Food Cost %</th>
              </tr>
            </thead>
            <tbody>
            {todos.length ? 
              todos.map(todo => (
                <tr >
                  <td>{todo.location}</td>
                  <td>{todo.revenue}</td>
                  <td>{todo.ppa}</td>
                  <td>{todo.foodcost}</td>
                </tr>
              ))
              : 
              (<tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>)
            }
            </tbody>
          </Table>
        </header>
        
      </div>
    );
  }
}

export default table;