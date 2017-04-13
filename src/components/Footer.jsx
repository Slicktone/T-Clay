import React from 'react';
import ReactDOM from 'react-dom';


class Footer extends React.Component {
render() {
        return(

            <div className="footer-container">
            <a id='contact'></a>
                <footer>
                    <a href='www.facebook.com'><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                    <a href='https://www.linkedin.com/in/tclaytony/'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                    <a href='https://twitter.com/slicktone310'><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                    <a href='http://steamcommunity.com/id/shadow74261/'><i className="fa fa-steam-square fa-2x" aria-hidden="true"></i></a>
                    <a href='https://www.twitch.tv/f1gments'><i className="fa fa-twitch fa-2x" aria-hidden="true"></i></a>
                    <a href='https://www.freecodecamp.com/slicktone'><i className="fa fa-free-code-camp fa-2x" aria-hidden="true"></i></a>
                    <p> Conjured from the nerdy depths of <bold> Tony Claytons </bold>  imagination <i className="fa fa-hand-spock-o fa-1x" aria-hidden="true"></i></p>
                    <a href='#top' className='breadCrumb'> Back To Top </a>
                </footer>
            </div>
        );
    }
}

export default Footer;