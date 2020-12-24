import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const Food = props => (
  <tr>
    <td>{props.food.name}</td>
    <td><Link to={'update/' + props.food._id}>update</Link> | <a href='#' onClick={() => {props.deleteFood(props.food._id)}}>delete</a></td>
  </tr>
)

export default class FoodsList extends Component {
  constructor(props) {
    super(props);

    this.deleteFood = this.deleteFood.bind(this);

    this.state = { foods: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/foods/')
      .then(response => {
        this.setState({ foods: response.data })
      })
      .catch(err => console.log('Error: ' + err))
  }

  deleteFood(id) {
    axios.delete('http://localhost:5000/foods/' + id)
      .then(response => console.log(response.data))
      .catch(err => console.log('Error: ' + err));
    
      this.setState({
        foods: this.state.foods.filter(el => el._id !== id) // if the id of a user is different from the one we are deleting, then show it
      })

  }

  foodsList() {
    return this.state.foods.map(food => {
      return <Food food={food} deleteFood={this.deleteFood} key={food._id} />
    }).reverse()
  }

  render() {
    return (
      <div>
        <h3>Foods</h3>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Foods</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.foodsList() }
          </tbody>
        </table>
      </div>
    )
  }
}