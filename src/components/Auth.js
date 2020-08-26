import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: this.checkLoggedIn(),
            user: this.props.user
        };
    }

    checkLoggedIn = () => {
        return localStorage.getItem('auth_token') ? true : false;
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <div>
                    <p>Logout</p>
                </div>
            )
        } else {
            return (
                <div style={{ display: 'inline' }}>
                    <p style={{ display: 'inline' }}>Register</p>
                        <Link to={{
                            pathname: "/login",
                            setLoggedIn: this.props.setLoggedIn
                        }}>
                            <p style={{ color: '#ccc', display: 'inline', marginLeft: '28px' }}>
                                Login
                            </p>
                        </Link>
                </div>
            )
        }

    }
}

export default Auth
