import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                    <Home />
                    <About />
                    <Projects />
                <Footer />
            </div>

        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));