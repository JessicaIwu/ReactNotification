import React, { Component } from 'react';
import Confirmation from "./components/Confirmation";
import './App.css';

class App extends Component {
  state = {
    notification: {
      message: 'Should we bake a pie?',
      type: 'success',
      accept: function () {
        // parent component can do something with accept
      },
      decline: function () {
        // parent component can do something with decline
      }
    }
  }

  render() {
    const { notification } = this.state;
    // var notification = this.state.notification

    return (
      <div id="app">
        <Confirmation notification={notification} />
      </div>
    );
  }
}

export default App;
