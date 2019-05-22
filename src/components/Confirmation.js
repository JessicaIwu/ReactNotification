//rcc to make a react class component 

import React, { Component } from 'react';
import Notification from "./Notification"

export default class Confirmation extends Component {
  state = {
    notification: this.props.notification,
    showControl: true
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.notification !== prevProps.notification) {
      this.state({
        notification: this.props.notification
      })
    }
  }

  onClick = () => {
    this.setState({
      showControl: false
    })
  }

  render() {
    const { notification, showControl } = this.state;

    return (
      <div>
        <Notification notification={notification} />
        {showControl ?
          <>
            <div class="btn btn-primary mr-3" onClick={this.onClick}>Sure</div>
            <div class="btn btn-danger" onClick={this.onClick}>No Thanks</div>
          </>
          :
          null
        }
      </div>
    )
  }
}
