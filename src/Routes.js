import React from 'react';
import Router, { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Home from './component/Home';
import Foo from './component/Foo';
import Sub from './component/Sub';
import Bar from './component/Bar';
import Baz from './component/Baz';

export default (
  <Route path="/" name="home" handler={Home}>
    <DefaultRoute handler={Foo}/>
    <Route name="middle" path="middle" handler={Sub}>
      <Route name="bar" path="bar" handler={Bar}/>
      <Route name="baz" path="baz" handler={Baz}/>
    </Route>
  </Route>
);
