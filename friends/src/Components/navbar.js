/**
   navbar.js
   =========
   Created 2018-04-14T20:05:55
   Version 0.1.0
   ------------------------------
 */

import React from 'react';
import { Link } from 'react-router-dom';

import routeData from '../routes/route-data';

const NavBar = () => {
  return (
    <nav style={{ width: 'auto' }}>
      {routeData.map(({path, name}, i) => (
      <Link to={path} key={i*2} style={{ padding: '10px' }}>
        {name}
      </Link>
      ))}
    </nav>
  );
}

export default NavBar;
