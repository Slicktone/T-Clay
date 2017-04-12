import React, { Component } from 'react';
import { Link } from 'react-router';

class Projects extends React.Component {

   render() {
       const { project } = this.props;

       return (
           <div className='project-container'>
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
        </div>
       );
   }
}

export default Projects;