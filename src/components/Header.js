import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <ul style={listStyle}>
                    <li style={{ float: 'left' }}>
                        <Link exact style={brandBtn} to="/">
                            <h2>GoLive</h2>
                        </Link>
                    </li>
                    <li style={{ float: 'left' }}>
                        <Link exact style={btnStyle} to="/about">
                            <h2>About</h2>
                        </Link>
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
    padding: '14px 16px'
};

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
};

export default Header
