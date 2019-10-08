import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="https://google.com">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://google.com">Product</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;