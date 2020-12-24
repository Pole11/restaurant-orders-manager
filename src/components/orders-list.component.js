import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const Order = props => (
  <tr>
    <td>{props.order.username}</td>
    <td>{props.order.description}</td>
    <td>
      <ul>{
    props.order.foods.map(function(food) {
      return <li>{food.name}</li>
    }) 
      }</ul>
    </td>
    <td>{props.order.date.substring(0, 10)}</td>
    <td>{props.order.date.substring(11, 19)}</td>
    <td><Link to={'update/' + props.order._id}>update</Link> | <a href='#' onClick={() => {props.deleteOrder(props.order._id)}}>delete</a></td>
  </tr>
)

export default class FoodsList extends Component {
  constructor(props) {
    super(props);

    this.deleteOrder = this.deleteOrder.bind(this);

    this.state = { orders: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/orders/')
      .then(response => {
        this.setState({ orders: response.data })
      })
      .catch(err => console.log(err))
  }

  deleteOrder(id) {
    axios.delete('http://localhost:5000/orders/' + id)
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
    
      this.setState({
        orders: this.state.orders.filter(el => el._id !== id) // if the id of a user is different from the one we are deleting, then show it
      })

  }

  ordersList() {
    return this.state.orders.map(order => {
      return <Order order={order} deleteOrder={this.deleteOrder} key={order._id} />
    }).reverse()
  }

  render() {
    return (
      <div>
        <h3>Orders</h3>
        <div className='table-responsive'>
          <table className='table'>
            <thead className='thead-light'>
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Foods</th>
                <th>Date</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.ordersList() }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}