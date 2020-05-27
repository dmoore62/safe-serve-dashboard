import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'reactstrap';
import top5Data from '../../top5data.json';



class table extends Component {
    state = {
    data : []
  }

  componentDidMount() {
    this.setState({
      todos: top5Data
    }) 
  }

  render() {
    const { todos = [] } = this.state;
    return (
      <div className="App">
      <h3>Guest Satisfaction - Top 5 Locations </h3>
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
                  <td>{todo.location}</td>
                  <td>{todo.mwt}</td>
                  <td>{todo.score}</td>
                  <td>{todo.ranking}</td>
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