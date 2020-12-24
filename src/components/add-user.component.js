import React, { Component } from 'react';
import axios from 'axios';

export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) { // when in the form you change the name, update the state
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username
    }
    //console.log(food);
    axios.post('http://localhost:5000/users/add', user) // send data to the db
      .then(res => {
        console.log(res.data);
        window.location = '/users/'; 
      })
      .catch(err => console.log(err));

    this.setState({ // reset the form
      username: ''
    });

    //window.location = '/'; // go back to the homepage
  }

  render() {
    return (
      <div className='container-lg'>
        <h3>Add User 😋</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <input  type='text' 
                    required 
                    className='form-control' 
                    value={this.state.username}
                    onChange={this.onChangeUsername}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Add User' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}