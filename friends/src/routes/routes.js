/**
   routes.js
   =========
   Created 2018-04-14T20:30:38
   Version 0.1.0
   ------------------------------
 */

import React, { Component} from 'react';
import { Route } from 'react-router-dom';

import routeData from '../routes/route-data';

const Routes = () => {
  return (
    <div>
      {routeData.map((route, i) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={i*2+1} />
      ))};
    </div>
  )
}

export default Routes;
