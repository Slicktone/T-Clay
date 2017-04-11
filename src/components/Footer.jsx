import React from 'react';
import ReactDOM from 'react-dom';


class Footer extends React.Component {
render() {
        return(

            <div className="footer-container">
                <footer>
                    <a href="index.html" id="logo"> Tony Clayton </a>
                        <span className="footer-icons">
                            <i className="devicon-github-plain colored"></i>
                            <i className="devicon-twitter-plain colored"></i>
                            <i className="devicon-facebook-plain colored"></i>
                        </span>
                    <a href='#' className='breadCrumb'> Back To Top </a>
                </footer>
            </div>
        );
    }
}

export default Footer;