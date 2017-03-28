import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
    render() {
        return(
            <div className="container">
                <a href="index.html" id="logo"> Tony Clayton </a>
                    <div className="navbar">
                        <a href="index.html"> Home </a>
                        <a href="#"> About </a>
                        <a href="#"> Portfolio </a>
                        <a href="#"> Contact </a>              
                </div>
            </div>
        );
    }
}