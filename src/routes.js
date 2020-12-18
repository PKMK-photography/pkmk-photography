import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
const Sessions = lazy(() => import('./Components/Sessions/Sessions'));
const Portfolio = lazy(() => import('./Components/Portfolio/Portfolio'));
const Contact = lazy(() => import('./Components/Contact/Contact'));

export default (
    <Suspense fallback={<div id='loading-container'>Loading...</div>}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/services' component={Sessions}/>
            <Route path='/project-gallery' component={Portfolio}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </Suspense>
);