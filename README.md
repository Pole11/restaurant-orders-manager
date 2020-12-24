# RESTAURANT ORDERS MANAGER

It is a simple project built using MERN. I am building this app to learn MERN.  
I am a beginner so there are a lot of mistakes.

- [RESTAURANT ORDERS MANAGER](#restaurant-orders-manager)
  - [About the project](#about-the-project)
  - [Technologies](#technologies)
  - [How to use - Installation](#how-to-use---installation)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [TODO](#todo)


## About the project
This project is not meant to be used in real life, it is just a project that I started to learn how to uild a website.  

## Technologies
The main technologies used are:
- MongoDB
- Express
- Node
- React
- Bootstrap

## How to use - Installation
I used npm as the package manager, and I installed some packages. Here is the list of them and how to install:
### Backend
|Name of the package|Installation|
|-------------------|------------|
|cors|```npm i cors```|
|express| ```npm i express```|
|mongoose|```npm i mongoose```|
|dotenv|```npm i dotenv```|

### Frontend
|Name of the package|Installation|
|-------------------|------------|
|react-datepicker|```npm i react-datepicker```|
|bootstrap| ```npm i bootstrap```|
|react-router-dom|```npm i react-router-dom```|
|axios|```npm i axios```|

## TODO
Setup MongoDB 📦
- [x] Create a project
- [x] Create a cluster
  - [x] Google cloud
  - [x] Add IP address whitelist
  - [x] Create a user  
  
Create a react app ⚛
- [x] Check if node is installed ```node -v```
- [x] Create a React app ```npx create-react-app restaurant-orders-manager``` (```cd restaurant-orders-manager```)
- [x] ```npm start```
  
Backend 🧮
- [x] Create directory for the backend ```mkdir backend``` and get into the directory ```cd backend```
- [x] Initialize a npm project with the default settings ```npm init -y```
- [x] Install the npm packages ```npm install express cors mongoose dotenv```
- [x] To make life easier I would also install nodemon, which will reload the server when you make a change ```npm install -g nodemon```
- [x] Create a file named '```server.js```' in the ```backend``` folder
- [x] Import express, cors ```const express = require('express'); const cors = require('cors');```
- [x] ```require('dotenv').config();```
- [x] create an express app
- [x] add cors middleware with ```app.use(cors());```
- [x] ```app.use(express.json());```
- [x] listen on port 5000
- [x] require mongoose
- [x] connect to the db with mongoose
- [x] create a ```.env``` file and add the connection string of the mongodb
- [x] create a folder named 'models' and inside it create three files ```user.model.js``` ```food.model.js``` ```order.model.js```
- [x] create a ```mongoose.Schema;``` in all the model files with the db schema
- [x] create a model based on that schema
- [x] export that schema

Server API Endpoints 🌐
- [x] create a folder named ```routes``` and create three files ```foods.js```, ```users.js``` and ```order.js```
- [x] create the user routes
  - [x] get ```users/```
  - [x] get ```users/:id```
  - [x] post ```users/add```
  - [x] post ```users/update/:id```
  - [x] delete ```users/:id```
- [x] create the food routes
  - [x] get ```food/```
  - [x] get ```food/:id```
  - [x] post ```food/add```
  - [x] post ```food/update/:id```
  - [x] delete ```food/:id```
- [x] create the order routes
  - [x] get ```orders/```
  - [x] get ```orders/:id```
  - [x] post ```orders/add```
  - [x] post ```orders/update/:id```
  - [x] delete ```orders/:id```
- [x] require the routes for the food, the users and the orders in the ```server.js``` file
- [x] use the routes
- [x] test the API with Insomnia
- [x] the backend is done, congrats man! Now lets start the front end
  
Frontend 🎁
- [x] get to the src folder 
- [x] if it is not running start the server with ```npm start``` in the main folder (nor src)
- [x] install bootstrap ```npm install bootstrap``` 
- [x] import bootstrap in the ```App.js``` file with ```import 'bootstrap/dist/css/bootstrap.min.css'```;
- [x] install react-router-dom with ```npm i react-router-dom --save``` and import it with ```import { BrowserRouter as Router, Route } from 'react-router-dom';``` and 🤞. Sometimes it might not work, the best way to fix is to create another react app and re-install packages. Or you try to restart the development server.
- [x] create a big ```<Router>``` element 
- [x] put in it the ```<Navbar>``` component
- [x] add the routes with ```<Route path='' exact component={name_of_the_component}```
- [x] import the components with ```import name_of_the_component from './components/name.component'```
- [x] create a ```components``` folder in the ```src``` folder and create the files for the components
- [x] create the components
  - [x] ```import React, { Component } from 'react'``` & ```import { Link } from 'react-router-dom'```
  - [x] all the components are different, but we can subdivde them in three categories, *create*, *update*, *list* (sorry if I can't explain them well, but they are long are complex (for me, a beginner), but you can follow this tutorial from freeCodeCamp: [text](https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1) and [video](https://youtu.be/7CqJlxBYj-M))
    - [x] Create 
      - [x] create a form
      - [x] create functions to update the state (use ```setState()```) when the user changes values in the form
      - [x] create get request if necessary to list all different users or food with ```axios``` (```npm i axios```)
      - [x] create a post request to send data to the db with ```axios``` 
    - [x] Update
      - [x] same as create, just update the state with the values of the element you are modifing (so you also need a get request of that particular item)
    - [x] List
      - [x] get all the elements of a category (with the ```map``` function)
- [x] Add emojis if necessary 🙈 
- [x] Add details (they make the difference)
- [ ] Fix bugs
  - [ ] when you update the order, make the checkboxes work at the first refresh of the page, don't let the user refresh the page
- [ ] You are done 🎉




