import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <div id="home-content">
                <h1 className='name'> Tony Clayton </h1>
                <img className='profile-shot' src='../public/assets/img/profile_shot.jpg' alt='' />
                <h3 className='profession'> Profession() => { " Web Developer " } </h3>

                <div className='skills'>
                    <a href='#' target='_blank'> HTML5 </a>
                        <span className='space'> | </span>

                    <a href='#' target='_blank'> CSS </a>
                        <span className='space'> | </span>

                    <a href='#' target='_blank'> Javascript </a>
                        <span className='space'> | </span>

                    <a href='#' target='_blank'> jQuery </a>
                        <span className='space'> | </span>

                    <a href='#' target='_blank'> MySQL </a>
                        <span className='space'> | </span>

                    <a href='#' target='_blank'> MongoDB </a>
                        <span className='space'> | </span>

               </div>
</div>

        );
    }
};

export default Home;