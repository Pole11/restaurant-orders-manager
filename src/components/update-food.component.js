import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateFood extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/foods/' + this.props.match.params.id)
      .then(response => {
        this.setState({ name: response.data.name })
      })
      .catch(err => console.log(err))
  }

  onChangeName(e) { // when in the form you change the name, update the state
    this.setState({
      name: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const food = {
      name: this.state.name
    }
    //console.log(food);
    axios.post('http://localhost:5000/foods/update/' + this.props.match.params.id, food) // send data to the db
      .then(res => {
        console.log(res.data);
        window.location = '/foods/'; 
      })
      .catch(err => console.log(err));

    this.setState({ // reset the form
      name: ''
    });

    //window.location = '/'; // go back to the homepage
  }

  render() {
    return (
      <div className='container-lg'>
        <h3>Update Food</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Food name: </label>
            <input  type='text' 
                    required 
                    className='form-control' 
                    value={this.state.name}
                    onChange={this.onChangeName}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Update Food' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}