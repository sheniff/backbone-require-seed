require.config({
  shim: {   // Using shim we define dependencies between our libraries
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  paths: {   // Require.js allows us to configure shortcut alias
    jquery: '../libs/jquery/jquery-min',
    underscore: '../libs/underscore/underscore-min',
    backbone: '../libs/backbone/backbone-min',
    text: '../libs/require/text',
    templates: 'templates'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){ // The "app" dependency is passed in as "App"
  App.initialize();
});