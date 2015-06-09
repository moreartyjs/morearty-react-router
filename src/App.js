import React from 'react';
import Router from 'react-router';
import Morearty from 'morearty';

import Routes from './Routes';

export default React.createClass({

  mixins: [Morearty.Mixin],

  componentWillMount: function() {
    var metaBinding = this.getDefaultBinding().meta();

    Router.run(Routes, Router.HistoryLocation, (Handler, state) => {
      this.Handler = Handler;
      metaBinding.set('currentPath', state.path);
    });
  },

  render: function() {
    var binding = this.getDefaultBinding();
    var Handler = this.Handler;

    return Handler ? <Handler binding={binding}/> : null;
  }

});
