import React, { Component } from 'react';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.emojis = ['🥐','🥑','🥒','🥓','🥔','🥕','🥖','🥗','🦑','🦐','🥞','🥝','🥜','🥚','🥙','🥘','🍕','🥦','🧀','🍔','🍟','🌭','🍿','🌮','🌯','🍱','🥡','🥠','🥟','🍗','🍖','🥘','🍩','🍨','🍧','🍦','🥧','🍹','🧃','☕','🍵','🧉','🍷','🍇','🍌','🍋','🍊','🍉'];
    this.emojiIndex = Math.floor(Math.random() * this.emojis.length)
  }

  render() {
    return (
      <div className="text-center">
        <h3>Welcome to Restaurant Orders Manager</h3>
        <h1>{ this.emojis[this.emojiIndex]}</h1>
        <p>To start add a User, then look at the available foods. If you want a food that is not in the list, add one. Then create your order and wait for your food to arrive and eat it!</p>
      </div>

    )
  }
}