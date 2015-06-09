import React from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import Morearty from 'morearty';

export default React.createClass({

  mixins: [Morearty.Mixin],

  render: function () {
    var binding = this.getDefaultBinding();
    return (
      <div>
        <h1>- {binding.get('name')} -</h1>
        <Link to="home">Foo</Link>
        <Link to="bar">Bar</Link>
        <Link to="baz">Baz</Link>
        <RouteHandler binding={binding}/>
      </div>
    );
  }

});
