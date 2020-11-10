import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Sessions from './Components/Sessions/Sessions';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/services' component={Sessions}/>
        <Route path='/project-gallery' component={Portfolio}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
);