import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <div id="home-content">

                <i className="devicon-html5-plain-wordmark colored"></i> <span className='space'>      </span> <i className="devicon-javascript-plain colored"></i>
                
                <div id='skills'>
              
                 <i className="devicon-css3-plain-wordmark colored"></i> <img className='profile-shot' src='../public/assets/img/profile_shot.jpg' alt='' /> <i className="devicon-jquery-plain-wordmark colored"></i>

                     <br />
                     <i className="devicon-mysql-plain colored"></i> <span className='space'>      </span> <i className="devicon-mongodb-plain-wordmark colored"></i>

                <h3 className='profession'> Profession() => { " Web Developer " } </h3>

               </div>
        </div>

        );
    }
};

export default Home;