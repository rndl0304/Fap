import React from 'react';
import '../Styles/Title.css';

class Title extends React.Component{
    constructor(props){
      super();
      this.state = {
        title: props.title
      };
    }

    render(){
      return(
          <h1>{this.state.title}</h1>
      )
    }
  }

  export default Title;