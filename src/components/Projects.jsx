import React, { Component } from 'react';
import { Link } from 'react-router';

class Projects extends React.Component {

   render() {
       const { project } = this.props;

       return (
           <div className='project-container'>
               <div className='image-container'>
                   <div className='logo-container'>
                       <img className='profile-shot' src='../public/assets/img/profile_shot.jpg' href='www.t-clay.com'></img>
                    </div>
                </div>
            

            <div className='project-info'>
                <a href='#' target='_blank'>
                    <h2> Project Title </h2>
                </a>
            </div>
        </div>
       );
   }
        // map out projects to show when projects link is clicked.
        // maybe an onclick or onMount
}

export default Projects;