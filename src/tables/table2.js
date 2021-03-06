import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'reactstrap'

class table extends Component {
    state = {
    data : []
  }

  componentDidMount() {
    axios.get("http://localhost:3003/urls-desktop")
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
      <h3>Revenue - Top 10 Locations </h3>
      <header className="App-header">
          <Table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Revenue</th>
                <th>Food Cost</th>
                <th>Per Guest Avg</th>
                <th>Ranking</th>
              </tr>
            </thead>
            <tbody>
            {todos.length ? 
              todos.map(todo => (
                <tr >
                  <td>{todo.Url}</td>
                  <td>{todo.Clicks}</td>
                  <td>{todo.Impressions}</td>
                  <td>{todo.CTR}</td>
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