const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const mongoose = require('mongoose');

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); // connect to the db
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Server is connected to the MongoDB!')
});

const userRouter = require('./routes/users');
const foodRouter = require('./routes/foods');
const orderRouter = require('./routes/orders');

app.use('/users', userRouter);
app.use('/foods', foodRouter);
app.use('/orders', orderRouter);

app.listen(port, () => {
  console.log(`Server is ready on: ${port}`);
});