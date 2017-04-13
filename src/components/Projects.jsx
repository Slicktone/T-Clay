import React, { Component } from 'react';
import { Link } from 'react-router';

class Projects extends React.Component {

   render() {
       const { project } = this.props;

       return (
           <div className='project-container'>
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
                       <img className='north-east-trees' src='../public/assets/img/NET-logo-250.png' href='www.bringingnatureback.org'></img>
                          
                          <div className='project-info'>
                                <a href='www.bringingnatureback.org' target='_blank'>
                                    <h2> North East Trees </h2>
                                </a>
                            </div>
                    </div>

                    <div className='logo-container'>
                       <img className='jslv' src='../public/assets/img/jslv-hooks-180.png' href='www.jslv.com'></img>
                         <div className='project-info'>
                                <a href='www.jslv.com' target='_blank'>
                                    <h2> JSLV </h2>
                                </a>
                            </div>
                    </div>

                </div>  

                <h5> To see more of my Projects check out the links below! </h5>

                <div className='projects-more'>
                    <span className='project-linkedin'>
                       <a className='projects-more-item' href='#'> <i className="fa fa-linkedin fa-4x" aria-hidden="false"></i></a>
                    </span>

                    <span className='project-github'>
                        <i className="fa fa-github-alt fa-4x" aria-hidden="false"></i>
                    </span>

                    <span className='project-codepen'>
                        <i className="fa fa-codepen fa-4x" aria-hidden="false"></i>
                    </span>    
                </div>
        </div>
       );
   }
}

export default Projects;