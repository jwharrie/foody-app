import React from 'react';
import {NavLink} from 'react-router-dom';

import '../less/navigation.less'

const Navigation = () => {
  return (
    <div>
      <div id='logo'><img src='/uberflip.png' alt='Uberflip' /></div>
      <div id='app-name'>foody</div>
      <div id='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
