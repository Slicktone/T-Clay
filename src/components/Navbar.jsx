import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
    render() {
        return(
            <div className="container">
            <nav>
                <a id="top"> Tony Clayton </a>
                
                        <div className="navbar">
                            
                                <a href="#about"> About </a>
                            
                                 <a href="#portfolio"> Portfolio </a>
                            
                                <a href="#contact"> Contact </a>
                        </div>              
                </nav>
            </div>
        );
    }
}

export default Navbar;