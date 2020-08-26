import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Auth from './Auth';

export class Header extends Component {

    constructor(props) {
        super(props);
           
        this.state = {
            loggedIn: this.checkLoggedIn()
        };

        this.checkLoggedIn.bind(this);
    }
        
    checkLoggedIn() {
        return localStorage.getItem('auth_token') ? true : false;
    };

    setLoggedIn() {
        this.setState({ loggedIn: true });
    }

    setLoggedOut() {
        this.setState({ loggedIn: false });
    }

    render() {
        return (
            <div style={headerStyle}>
                <ul style={listStyle}>
                    <li style={{ float: 'left' }}>
                        <Link style={brandBtn} to="/">
                            <h2>GoLive</h2>
                        </Link>
                    </li>
                    <li style={{ float: 'left' }}>
                        <Link style={btnStyle} to="/about">
                            <p>About</p>
                        </Link>
                    </li>
                    <li style={{ float: 'left' }}>
                        <div style={btnStyle}>
                            <Auth setLoggedIn={this.setLoggedIn} />
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

const listStyle = {
    listStyleType: 'none',
    margin: '0px',
    padding: '0px',
    overflow: 'hidden'
};

const brandBtn = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    padding: '14px 16px'
};

const btnStyle = {
    color: '#ccc',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    padding: '20px 16px'
};

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
};

export default Header
