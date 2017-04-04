import React from 'react';
import ReactDOM from 'react-dom';


class Footer extends React.Component {
render() {
        return(
            <footer>
                <a href="index.html" id="logo"> Tony Clayton </a>
                    <div className="footer-container">
                        <a href='#' className='tagName'> @ Slicktone </a>
                        <a href='#' className='breadCrumb'> Back To Top </a>
                     </div>
            </footer>
        );
    }
}

export default Footer;