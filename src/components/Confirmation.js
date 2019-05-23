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
      <div className="box p-3 m-3" id="width-50">
        {showControl ? (
          <Notification {...notification}>
            <div className="btn btn-primary mr-3" onClick={this.onClick}>Sure</div>
            <div className="btn btn-danger" onClick={this.onClick}>No Thanks</div>
          </Notification>
        ) : null}
      </div>
    )
  }
}