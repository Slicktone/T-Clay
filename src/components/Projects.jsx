import React, { Component } from 'react';
import { Link } from 'react-router';

class Projects extends React.Component {

   render() {
       const { project } = this.props;

       return (
           <div className='project-container'>
             <a id='#portfolio' name='portfolio'></a>
           <div className='project-intro'>
                <h1> Portfolio </h1>

                <p> Below are just a few of my projects, utilizing various technologies, frameworks, and designs. <br />
                    The Projects listed here show my growth and diversity as a developer.
                </p>
            </div>
               <div className='image-container'>

                   <div className='logo-container'>
                       <img className='tukio' src='../public/assets/img/tukio-180x180.png' href='https://tukio-webapp.herokuapp.com/'></img>
                            
                            <div className='project-info'>
                                <a href='https://tukio-webapp.herokuapp.com/' target='_blank'>
                                    <h2> Tukio </h2>
                                </a>
                            </div>
                    </div>

                    <div className='logo-container'>
                       <img className='city-trek' src='../public/assets/img/city-trek-logo-150.png' href='https://city-trek.herokuapp.com/'></img>
                         <div className='project-info'>
                                <a href='https://city-trek.herokuapp.com/' target='_blank'>
                                    <h2> City Trek </h2>
                                </a>
                            </div>
                    </div>

                    <div className='logo-container'>
                       <img className='north-east-trees' src='../public/assets/img/NET-logo-250.png' href='http://www.northeasttrees.org/'></img>
                          
                          <div className='project-info'>
                                <a href='http://www.northeasttrees.org/' target='_blank'>
                                    <h2> North East Trees </h2>
                                </a>
                            </div>
                    </div>

                    <div className='logo-container'>
                       <img className='jslv' src='../public/assets/img/jslv-hooks-180.png' href='http://www.jslv.com/about'></img>
                         <div className='project-info'>
                                <a href='http://www.jslv.com/about' target='_blank'>
                                    <h2> JSLV </h2>
                                </a>
                            </div>
                    </div>

                </div>  

                <h5> To see more of my Projects check out the links below! </h5>

                <div className='projects-more'>

                    <span className='project-github'>
                        <a className='projects-more-item' href='https://github.com/Slicktone'><i className="fa fa-github-alt fa-4x" aria-hidden="false"></i></a>
                    </span>

                    <span className='project-linkedin'>
                       <a className='projects-more-item' href='https://www.linkedin.com/in/tclaytony/'> <i className="fa fa-linkedin fa-4x" aria-hidden="false"></i></a>
                    </span>


                    <span className='project-codepen'>
                        <a className='projects-more-item' href='http://codepen.io/Slicktone/'><i className="fa fa-codepen fa-4x" aria-hidden="false"></i></a>
                    </span>    
                </div>
        </div>
       );
   }
}

export default Projects;