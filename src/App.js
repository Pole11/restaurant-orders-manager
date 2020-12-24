import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import HomePage from './components/home-page.component';

import UsersList from './components/users-list.component';
import AddUser from './components/add-user.component';
import UpdateUser from './components/update-user.component';

import FoodsList from './components/foods-list.component';
import AddFood from './components/add-food.component';
import UpdateFood from './components/update-food.component';

import OrdersList from './components/orders-list.component';
import AddOrder from './components/add-order.component';
import UpdateOrder from './components/update-order.component';

function App() {
  // the Route components are the pages that can be loaded, based on the path (url)
  return (
    <Router>
      <div className='container-lg'>
        <Navbar />
        <br />
        <Route path='/' exact component={ HomePage } />
        <Route path='/users/' exact component={ UsersList } />
        <Route path='/users/add' exact component={ AddUser } />
        <Route path='/users/update/:id' exact component={ UpdateUser } />
        <Route path='/foods/' exact component={ FoodsList } />
        <Route path='/foods/add/' exact component={ AddFood } />
        <Route path='/foods/update/:id' exact component={ UpdateFood } />
        <Route path='/orders/' exact component={ OrdersList } />
        <Route path='/orders/add' exact component={ AddOrder } />
        <Route path='/orders/update/:id' exact component={ UpdateOrder } />
      </div>
    </Router>
      

);
}

export default App;
