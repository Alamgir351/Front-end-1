import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/auth';

class Register extends Component {
    state = {
        creds: {
        username: "",
        password: ""
        }
    }


    changeHandler = (e) =>{
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
      }; 

    register = (e) =>{
        e.preventDefault();
        this.props.register(this.state.creds);
    }

    render() {
        console.log(this.state, "from Register")
        return (
            <div>
                <form onSubmit={this.register}>
                    <input type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.changeHandler}></input>
                    <input type="text" placeholder="Password" value={this.state.password} name="password" onChange={this.changeHandler}></input>
                <button onClick={this.register}>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {register} ) (Register);