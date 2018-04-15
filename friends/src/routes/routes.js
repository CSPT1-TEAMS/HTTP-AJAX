/**
   routes.js
   =========
   Created 2018-04-14T20:30:38
   Version 0.1.0
   ------------------------------
   Updated 2018-04-14T23:26:37
   Version 0.1.1
   Routes work; factored out listRoutes; added Friends
   ------------------------------
 */

import React from 'react';
import { Route } from 'react-router-dom';

import routeData from '../routes/route-data';

const listRoutes = (routes, friendProps) =>
  routes.map(({ path, exact, Component }, i) => (
    <Route path={path} exact={exact} key={i}
    render={ props => (<Component {...props} {...friendProps} />)} />
  ));

const Routes = (friendProps) => {

  return (
    <div className="routes">
      {listRoutes(routeData, friendProps)}
      <Route path="/friends" exact render={ () => <h1>Friends</h1> } />
    </div>
  )
}

export default Routes;
