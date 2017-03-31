import React from 'react';


class Footer extends React.Component {
render() {
        return(
            <nav>
                <a href="index.html" id="logo"> Tony Clayton </a>
                    <div className="container">
                        <ul className="navbar">
                            <li>
                                <a href="index.html"> Home </a>
                            </li>
                            <li>
                                <a href="#"> About </a>
                            </li>
                            <li>
                                 <a href="#"> Portfolio </a>
                            </li>
                            <li>
                                <a href="#"> Contact </a>
                            </li>
                        </ul>              
                </div>
            </nav>
        );
    }
}