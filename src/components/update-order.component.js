import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class UpdateOrder extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeFoods = this.onChangeFoods.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      foods: [],
      date: new Date(),
      users: [],
      availableFoods: []
    }
  }

  componentDidMount() {
    // this functions will be called when everything loads
    axios.get('http://localhost:5000/users/') // get the users
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username), // data is an array, map is needed to return something from each value of the array
            // only return the username of the user object
            username: response.data[0].username // set the default name as the first of the array
          })
        }
      })
    axios.get('http://localhost:5000/foods/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            availableFoods: response.data.map(food => food) // data is an array, map is needed to return something from each value of the array
          })
        }  
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:5000/orders/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          foods: response.data.foods,
          date: new Date(response.data.date)
        });

        this.state.foods.map(food => { // check the checkboxes of the selected food
          document.getElementById(food._id).checked = true;
          console.log('checking element with the id of ' + food._id);
        })
      })
    .catch(err => console.log(err));
  }

  onChangeUsername(e) { // when in the form you change the name, update the state
    this.setState({
      username: e.target.value
    });
  }
  onChangeDescription(e) { 
    this.setState({
      description: e.target.value
    });
  }
  onChangeFoods(e) {
    // e.target.checked
    let tmpFoods = [];
    for (let i = 0; i < this.availableFoods.length; i += 1) {
      let checkBoxElement = document.getElementById(this.availableFoods[i].id);
      if (checkBoxElement.checked) {
        tmpFoods.push(this.availableFoods[i])
      }
    }
    this.setState({
      foods: tmpFoods
    })
  }
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  foodListCheckbox() {
    return this.state.availableFoods.map(function(food) {
      return  <div> 
                <input className='form-check-input' type='checkbox' key={food.name} name={food.name} value={food.name} id={food._id} /> 
                <label className='form-check-label' key={'label'+food.name} htmlFor={food.name} > { food.name } {console.log('checkboxes loaded')} </label>
              </div> 
    })
  }

  onSubmit(e) {
    e.preventDefault();
    let tmpFoods = [];
    for (let i = 0; i < this.state.availableFoods.length; i += 1) {
      //console.log(this.state.availableFoods[i].name + ' | ' + this.state.availableFoods[i]._id)
      let checkBoxElement = document.getElementById(this.state.availableFoods[i]._id);
      if (checkBoxElement.checked) {
        tmpFoods.push(this.state.availableFoods[i])
      }
    }
    //
    const order = {
      username: this.state.username,
      description: this.state.description,
      foods: tmpFoods,
      date: this.state.date
    }
    //console.log(order);
    axios.post('http://localhost:5000/orders/update/' + this.props.match.params.id, order) // send data to the db
      .then(res => {
        console.log(res.data);
        window.location = '/orders/'; 
      })
      .catch(err => console.log('Error: ' + err));
  }

  render() {
    return (
      <div className='container-lg'>
        <h3>Update Order</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select ref='userInput' 
                    required 
                    className='form-control' 
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option key={user} value={user}> {user} </option>
                })
              }
            </select>
          </div>
          <div  className='form-group'>
            <label>Description: </label>
            <input  type='text'  
                    className='form-control' 
                    value={this.state.description}
                    onChange={this.onChangeDescription}
            />
          </div>
          <div className='form-group'>
            <label>Foods: </label>
            { this.foodListCheckbox() }
          </div>
          <div className='form-group'>
            <label>Date: </label>
            <div>
              <DatePicker selected={this.state.date}
                          onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className='form-group'>
            <input type='submit' value='Update Order' className='btn btn-primary'/>
          </div>          
        </form>
        <div>
          <span>Are there any problems while loading the webpage? Press this button: </span>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => window.location.reload(false)} >Reload Page</button>
        </div>
      </div>
      
    )
  }
}