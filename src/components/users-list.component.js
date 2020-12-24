import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td><Link to={'update/' + props.user._id}>update</Link> | <a href='#' onClick={() => {props.deleteUser(props.user._id)}}>delete</a></td>
  </tr>
)

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);

    this.state = { users: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch(err => console.log(err))
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/' + id)
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
    
      this.setState({
        users: this.state.users.filter(el => el._id !== id) // if the id of a user is different from the one we are deleting, then show it
      })

  }

  usersList() {
    return this.state.users.map(user => {
      return <User user={user} deleteUser={this.deleteUser} key={user._id} />
    }).reverse()
  }

  render() {
    return (
      <div>
        <h3>Users</h3>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.usersList() }
          </tbody>
        </table>
      </div>
    )
  }
}