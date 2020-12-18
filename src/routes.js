import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Home from './Components/Home/Home';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
const Sessions = lazy(() => import('./Components/Sessions/Sessions'));
const Portfolio = lazy(() => import('./Components/Portfolio/Portfolio'));
const Contact = lazy(() => import('./Components/Contact/Contact'));

export default (
    <Suspense 
        fallback={<div id='loading-container'>
                    <Loader 
                        type='ThreeDots'
                        color='#646464'
                        height={100}
                        width={100}/>
                  </div>}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/services' component={Sessions}/>
            <Route path='/project-gallery' component={Portfolio}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </Suspense>
);