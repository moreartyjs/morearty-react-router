import React from 'react';
import Router, { RouteHandler } from 'react-router';
import Morearty from 'morearty';

export default React.createClass({

  mixins: [Morearty.Mixin],

  render: function () {
    var binding = this.getDefaultBinding();
    var metaBinding = binding.meta();
    return (
      <div>
        <h2>Path: {metaBinding.get('currentPath')}</h2>
        <RouteHandler binding={binding}/>
      </div>
    );
  }

});
