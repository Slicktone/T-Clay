import React from 'react';

class About extends React.Component {
    render() {
        return ( 
            <div className="about">
            <a id='about' name='about'></a>
                <h1> About Me! </h1>
                <div className="about-container">
                    <p> A self-motivated individual who enjoys learning about the next level of technology from fundamentals to advanced theories. Efficient and effective in teams and able to maintain a task focus and balance interaction between peers.  
                        Confident in front-end development but inspired by the many challenges of back-end development.
                    </p>
                </div>

                <div className="about-links">
                    <span className="about-linkedin">
                        <a href="www.linkedin.com/in/tclaytony">| LinkedIn |</a> 
                    </span>

                    <span className="about-resume">
                        <a href="#">| Resume |</a>
                    </span>

                    <span className="about-twitter">
                        <a href="www.twitter.com/Slicktone310">| Twitter |</a>
                    </span>
                </div>
                
            </div>
        )
    }
}
export default About;