import React from 'react';
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routers from './Routers';

export default function BasicRouter() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      {renderRoutes(routers)}
    </>
  )
}
