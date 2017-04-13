import React from 'react';
import ReactDOM from 'react-dom';


class Footer extends React.Component {
render() {
        return(

            <div className="footer-container">
                <footer>
                            <i className="devicon-github-plain colored"></i>
                            <i className="devicon-twitter-plain colored"></i>
                            <i className="devicon-facebook-plain colored"></i>
                        
                    <a href='#' className='breadCrumb'> Back To Top </a>
                </footer>
            </div>
        );
    }
}

export default Footer;