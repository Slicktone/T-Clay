import React from 'react';
import { Link } from 'react-router';

import Navbar from 'Navbar';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

class Home extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <div className="home-content">
                <Navbar />
                <Main />
                <About />
                <Projects />
                <Contact />
                <Footer />
</div>

        );
    }
};

export default Home;