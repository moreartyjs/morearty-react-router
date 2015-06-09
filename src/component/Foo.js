import React from 'react';
import Morearty from 'morearty';

export default React.createClass({

  mixins: [Morearty.Mixin],

  render: function () {
    var binding = this.getDefaultBinding();
    return <div>Foo {binding.get('foo')}!</div>;
  }

});
