import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
        <div id="home-content">
            <div className='skills-first-row'>
                <i className="devicon-html5-plain-wordmark colored"></i>
                <i className="devicon-css3-plain-wordmark colored"></i>
            </div>
            
            <br />

            <div className='skills-second-row'>
                <span className='javascript'>
                    <i className="devicon-javascript-plain colored"></i>
                </span>

                <span className='skill-spacing'>
                </span>

                <span className='jquery'>
                    <i className="devicon-jquery-plain-wordmark colored"></i>
                </span>
            </div>

            <div className='img-container'>
                <img className='profile-shot' src='../public/assets/img/profile_shot.jpg' alt='' />
            </div>

            <div className='skills-third-row'>
                <i className="devicon-nodejs-plain colored"></i>
                <i className="devicon-react-original-wordmark colored"></i>
            </div>

            <div className='skills-fourth-row'>
                <i className="devicon-mysql-plain colored"></i>
                <i className="devicon-mongodb-plain-wordmark colored"></i>
            </div>

            <h3 className='profession'> Profession() => { " { Web Developer } " } </h3>

        </div>

        );
    }
};

export default Home;