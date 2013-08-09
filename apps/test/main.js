require.config({
  paths: {
    jquery: '../../lib/jquery',
    underscore: '../../lib/underscore-min',
    backbone: '../../lib/backbone-min',
    text: "../../lib/text",
    templates: 'templates'
  },
  shim: {
      'backbone': {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
      },
      'underscore': {
          exports: '_'
      }
  }

});

require(['jquery','underscore','backbone','router'], function($, _, Backbone) {
    Backbone.history.start();
});
