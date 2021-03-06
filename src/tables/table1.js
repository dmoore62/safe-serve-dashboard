import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'reactstrap'


// This file is only for example. 
//Is not being used. 
//Click the specific folder to see the file  that the graph is using.


class table extends Component {
    state = {
    data : []
  }

  componentDidMount() {
    axios.get("http://localhost:3003/Keywords-desktop")
      .then(response => {
        this.setState({
          todos: response.data
        });
      })
  }

  render() {
    const { todos = [] } = this.state;
    console.log(todos)
    return (
      <div className="App">
      <h3>Guest Satisfaction - Top 10 Locations </h3>
      <header className="App-header">
          <Table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Median Wait Times</th>
                <th>Satisfaction Score</th>
                <th>Ranking</th>
              </tr>
            </thead>
            <tbody>
            {todos.length ? 
              todos.map(todo => (
                <tr >
                  <td>{todo.Keyword}</td>
                  <td>{todo.Clicks}</td>
                  <td>{todo.Impressions}</td>
                  <td>{todo.Position}</td>
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