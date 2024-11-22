import React from 'react';
import Title from '../Components/Title';

class Login extends React.Component{
    constructor(){
      super();

      this.state = {
        input: {},
        errors: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      let input = this.state.input;

      input[event.target.name] = event.target.value;
      this.setState({input})
    }

    handleSubmit(event){

      event.preventDefault();
      
      if (this.validate()){
        console.log(this.state);

        let input = {};
        input["username"] = "";
        input["password"] = "";
        this.setState({input : input});
      }
    }

    validate() {
      let input = this.state.input;
      let errors = {};
      let isValid = true;

      //checks if the username is null or undefined
      if (!input["username"]){
        isValid = false;
        errors["username"] ="Please enter your username";
      }

      if (typeof input["username"] !== "undefined"){
        const re = /^\S*$/;
        if(input["username"].length < 6 || !re.test(input["username"])){
          isValid = false;
          errors["username"] = "Please enter valid username"
        }
      }

      if(!input["password"]){
        isValid = false;
        errors["password"] = "Please enter your password"
      }


      if(typeof input["password"] !== "undefined"){
        var patternPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
        if(!patternPassword.test(input["password"])){
          isValid = false;
          errors["password"] = "The password should contain atleast one lowercase, one uppercase, one digit and one special character. The password should be atleast 8 characters long."
        }
      }

      this.setState({errors: errors});

      return isValid;
    }
    
    render(){
      return(
        <div className='container'>
          <Title title = "Login"/>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label for="username" className='form-label fs-5 fw-bold'>USERNAME:</label>
              <input
              type="text"
              name="username"
              value={this.state.input.username}
              onChange={this.handleChange}
              className='form-control fs-5'
              placeholder='Enter username'
              id="username"
              />
              <div className='text-danger form-text fw-bold fs-5'>{this.state.errors.username}</div>
            </div>
            <div className='form-group'>
                
              <div className='form-group'>
                <label for="password" className='form-label fs-5 fw-bold'>PASSWORD:</label>
                <input 
                type="password"
                name="password"
                value={this.state.input.password}
                onChange={this.handleChange}
                className='form-control fs-5'
                placeholder='Enter password'
                id="password"
                />
                <div className='text-danger form-text fw-bold fs-5'>{this.state.errors.password}</div>
              </div>
            </div>
            <input 
              type="submit"
              value="SUBMIT"
              className='btn btn-success d-flex justify-content-center mx-auto mb-3 px-3'
              />
          </form>
        </div>
      )
    }
  }

  export default Login;