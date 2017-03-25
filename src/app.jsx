import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


const router = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path='home' component={}></Route>
        </Route>
    </Router>
)


ReactDOM.render(router, document.getElementById('app'));