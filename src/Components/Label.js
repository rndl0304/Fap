import React from 'react';
import '../Styles/Label.css';

class Label extends React.Component{
    constructor(props){
      super();
      this.state = {
        for : props.for,
        title: props.title
      };
    }

    render(){
      return(
        <label for= {this.props.for} >{this.props.title}</label>
      )
    }
  }

  export default Label;