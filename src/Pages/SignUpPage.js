import React from 'react';
import Title from '../Components/Title';

class SignUp extends React.Component{
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
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input : input});

        alert("Form is submitted");
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

      if(!input["email"]){
        isValid = false;
        errors["email"] = "Please enter your email address"
      }

      if(typeof input["email"] !== "undefined"){
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!pattern.test(input["email"])){
          isValid = false;
          errors["email"] = "Please enter a valid email address"
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

      if ( typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined"){
        if (input["password"] !== input["confirm_password"]){
          isValid = false;
          errors["confirm_password"] = "Passwords don't match"
        }
      }

      this.setState({errors: errors});

      return isValid;
    }
    
    render(){
      return(
        <div className='container'>
          <Title title = "Cadastro"/>
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
              <label for="email" className='form-label fs-5 fw-bold'>EMAIL ADDRESS:</label>
              <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className='form-control fs-5'
              placeholder='Enter Email'
              id="email"
              />
              <div className='text-danger form-text fw-bold fs-5'>{this.state.errors.email}</div>

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

              <div className='form-group'>
                <label for="confirm-password" className='form-label fs-5 fw-bold'>CONFIRM PASSWORD:</label>
                <input 
                type="password"
                name="confirm-password"
                id="confirm-password"
                value={this.state.input.confirm_password}
                onChange={this.handleChange}
                className='form-control fs-5'
                placeholder='Enter confirm password'
                />
                <div className='text-danger form-text mb-5 fw-bold fs-5'>{this.state.errors.confirm_password}</div>
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

  export default SignUp;