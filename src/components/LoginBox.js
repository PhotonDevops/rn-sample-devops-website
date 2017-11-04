import React, { Component } from 'react';

/**
 * Class representing Login Box.
 * @extends Component
 */

class LoginBox extends Component {
    /**
    * Create LoginBox
    * @param {object} props object that will construct LoginBox including the functions in it
    */
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

handleSubmit(event){
        event.preventDefault();
        // When the form is submitted, call the onSearch callback that is passed to the component
        var emailElm = document.getElementById("email").value;
        var passwordElm = document.getElementById("password").value;
        var username = {email:"devops@photon.com",password:"Welcome123"};
        if(emailElm === username.email && passwordElm === username.password){
            alert("SUCCESS LOGIN");
        } else {
            alert("FAILED LOGIN");
        }
    }
    
    /**
    * Render is a function to return html tags to be rendered
    * @returns {html} Html tags to be rendered 
    */
    render() {
        return (
            <div className="login">
            <div className="login-page">
            <div className="loginHeader">Welcome!</div>
            <div className="form">
            <form className="login-form" >
            <p>Sign in to your account.</p>
            <p className="loginbox-error"></p>
            <p>Email Address*</p>
            <input type="text" id="email"/>
            <p>Password*</p>
            <div className="password-container">
            <input type="password" id="password" maxLength="50"/>
            <span className="password-watch" onMouseUp={this.handleWatch} onMouseDown={this.handleWatch}></span>
            </div>
            <input id="remember-me" name="rememberme" type="checkbox"></input>
            <p>Remember me</p>
            <button type="button" onClick={this.handleSubmit}><img src="assets/images/lock.png" alt="lock"/>SIGN IN</button>
            <div className="forgotSection"><span><a id="forgotUsername">Forgot Password? </a></span>
            <span><a id="signUp">Create Account</a></span>
            </div>
            </form>
            </div>
            </div>
            <div className="loading">Loading&#8230;</div>
            </div>
        );
    }
}

export default LoginBox;