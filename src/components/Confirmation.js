import React, { Component } from 'react';
import Notification from './Notification';

export default class Confirmation extends Component {
  state = {
    notification: this.props.notification,
    showConfirmation: this.props.showConfirmation
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.notification !== prevProps.notification) {
      this.setState({
        notification: this.props.notification
      });
    }

    if (this.props.showConfirmation !== prevProps.showConfirmation) {
      this.setState({
        showConfirmation: this.props.showConfirmation
      });
    }
  }

  onShowAnswer = () => {
    this.props.handleShowAnswer();
  };

  onNotYet = () => {
    this.props.handleNotYet()
  }

  render() {
    const { notification, showConfirmation } = this.state;

    return (
      <>
        {showConfirmation ? (
          <div className="box p-3 m-3 " id="width-50">
            <Notification {...notification}>
              <div className="btn btn-primary mr-3" onClick={this.onShowAnswer}>
                Yes Please
              </div>
              <div className="btn btn-danger" onClick={this.onNotYet}>
                Not Yet
              </div>
            </Notification>
          </div>
        ) : null}
      </>
    );
  }
}
