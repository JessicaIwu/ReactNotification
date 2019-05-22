// import React, { Component } from "react";
// import Notification from "./Notification";
// class Form extends Component {
//   constructor() {
//     super();
//     this.state = {
//       notification: {
//         message: "Hello World",
//         type: "success"
//       }
//     };
//   }

//   onInputChange = e => {
//     let tempNotification = this.state.notification;
//     tempNotification.type = e.target.value;
//     this.setState({
//       notification: tempNotification
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <input
//             onChange={this.onInputChange}
//             placeholder="Enter text..."
//             type="text"
//           />
//         </div>
//         <div>
//           <Notification notification={this.state.notification} />
//         </div>
//       </div>
//     );
//   }
// }

// export default Form;
