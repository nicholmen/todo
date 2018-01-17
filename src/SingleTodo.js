import React, { Component } from "react";

// class SingleTodo extends Component {
//   constructor() {
//     super();

//   }

//   render() {
//     return (
//       <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//     );
//   }
// }

// this component has no internal state, everything about it is determined by what the parent says it should be. Has no internal state
// instead of creating a class, create a functional component. Only accepts props

const SingleTodo = props => {
  return (
    <li>{props.todo}<button onClick={props.delete}>X</button></li>    
  );
}

export default SingleTodo;
