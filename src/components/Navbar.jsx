import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
    render() {
        return(
            <div className="container">
            <nav>
                <a href="index.html" id="logo"> Tony Clayton </a>
                
                        <div className="navbar">
                            
                                <a href="index.html"> Home </a>
                            
                                <a href="#"> About </a>
                            
                                 <a href="#"> Portfolio </a>
                            
                                <a href="#"> Contact </a>
                        </div>              
                </nav>
            </div>
        );
    }
}

export default Navbar;