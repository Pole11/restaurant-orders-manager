import React, { Component } from 'react';
import axios from 'axios';

export default class AddFood extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    //this.randomEmoji = this.randomEmoji.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.emojis = ['🥐','🥑','🥒','🥓','🥔','🥕','🥖','🥗','🦑','🦐','🥞','🥝','🥜','🥚','🥙','🥘','🍕','🥦','🧀','🍔','🍟','🌭','🍿','🌮','🌯','🍱','🥡','🥠','🥟','🍗','🍖','🥘','🍩','🍨','🍧','🍦','🥧','🍹','🧃','☕','🍵','🧉','🍷','🍇','🍌','🍋','🍊','🍉'];
    this.emojiIndex = Math.floor(Math.random() * this.emojis.length);

    this.state = {
      name: '',
    }
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
    axios.post('http://localhost:5000/foods/add', food) // send data to the db
      .then(res => {
        console.log(res.data);
        window.location = '/foods/'; 
      })
      .catch(err => console.log(err));

    this.setState({ // reset the form
      name: '',
    });

    //window.location = '/'; // go back to the homepage
  }

  render() {
    return (
      <div className='container-lg'>
        <h3>Add Food { this.emojis[this.emojiIndex] } </h3>
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
            <input type='submit' value='Add Food' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}