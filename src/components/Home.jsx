import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <div id="home-content">

                <a className='skills-top' href='#' target='_blank'> HTML5 </a> <span className='space'> //////// </span> <a className='skills-top' href='#' target='_blank'> Javascript </a>
                <div id='skills'>

                    
                 <a href='#' target='_blank'> CSS </a> <img className='profile-shot' src='../public/assets/img/profile_shot.jpg' alt='' /> <a href='#' target='_blank'> jQuery </a>

                     <br />
                     <a href='#' target='_blank'> MySQL </a><span className='space'> //////// </span> <a href='#' target='_blank'> MongoDB </a>

                <h3 className='profession'> Profession() => { " Web Developer " } </h3>

               </div>
        </div>

        );
    }
};

export default Home;