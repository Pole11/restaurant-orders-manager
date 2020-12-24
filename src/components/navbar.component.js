import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand"><h1>Restaurant Orders Manager</h1></Link>
        <Link className="navbar-brand" to="/"></Link>
        <div className="collpase navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/users/" className="nav-link">Users</Link>
            </li>
            <li className="navbar-item">
            <Link to="/users/add" className="nav-link">Add User</Link>
            </li>
            <li className="navbar-item">
            <Link to="/foods/" className="nav-link">Foods</Link>
            </li>
            <li className="navbar-item">
            <Link to="/foods/add" className="nav-link">Add Food</Link>
            </li>
            <li className="navbar-item">
            <Link to="/orders/" className="nav-link">Orders</Link>
            </li>
            <li className="navbar-item">
            <Link to="/orders/add" className="nav-link">Add Order</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}