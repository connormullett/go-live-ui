import React, { Component } from 'react'
import { authService } from '../services/AuthService'; 

export class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        authService.login(this.state.username, this.state.password);
        if (localStorage.getItem('auth_token') != null) return this.props.setLoggedIn()
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.username} onChange={
                            (event) => this.setState({ username: event.target.value })
                        } placeholder="username" />
                    </label>
                    <label>
                        <input type="password" value={this.state.password} onChange={
                            (event) => this.setState({ password: event.target.value })
                        } placeholder="password" />
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

const formStyle = {
    
}

export default Login;
