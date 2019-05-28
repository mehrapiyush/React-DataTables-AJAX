import React, { Component } from 'react';
import Axios from 'axios';
import CoinTable from './coin-table';

class Blog extends Component {

    constructor(props){
    super(props)
        this.state = {
        posts: []
        }
    }
    componentDidMount () {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data;
            this.setState({posts:response.data});
        });
    }
    render () {
        return (
            <div className="page-container">
        <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.posts.map(row => (
            <tr>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.body}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
      </div>
        )
    }
}

export default Blog;