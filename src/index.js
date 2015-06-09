import React from 'react';
import Router, { Route, Link, DefaultRoute, RouteHandler } from 'react-router';
import Morearty from 'morearty';

import Ctx from './Context';
import App from './App';

var Bootstrap = Ctx.bootstrap(App);
React.render(<Bootstrap/>, document.getElementById('root'));
