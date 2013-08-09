require.config({
  paths: {
    jquery: '../../lib/jquery',
    underscore: '../../lib/underscore-min',
    backbone: '../../lib/backbone-min',
    text: "../../lib/text",
    templates: 'templates'
  }

});

require(['application'], function(TestApp) {
    TestApp.init();
});
