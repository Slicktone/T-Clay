import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1> About Me! </h1>
                <div className="about-container">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a turpis quis tortor cursus sagittis. Maecenas accumsan porta viverra. Morbi eget risus in odio imperdiet faucibus. 
                        Mauris vitae felis erat. Sed vestibulum augue non ipsum maximus gravida. Fusce efficitur, felis eu facilisis feugiat, orci arcu blandit sapien, a iaculis nunc magna non urna. 
                        Sed a accumsan quam. Donec dignissim, lectus in vehicula fringilla, turpis metus mollis justo, ut volutpat mauris lacus ut velit. Ut ornare lacinia eros, sed vehicula risus luctus ut. 
                        Cras ante arcu, feugiat a justo non, imperdiet congue nisi. Aliquam gravida est a leo pellentesque placerat.
                    </p>
                </div>

                <div className="about-links">
                    <span className="about-linkedin">
                        <a href="www.linkedin.com/in/tclaytony"> LinkedIn </a> 
                    </span>

                    <span className="about-resume">
                        <a href="#"> Resume </a>
                    </span>

                    <span className="about-twitter">
                        <a href="www.twitter.com"> Twitter </a>
                    </span>
                </div>
                
            </div>
        )
    }
}
export default About;