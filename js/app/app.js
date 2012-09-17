/**
 * App.js
 *
 * Entry point to application: It initializes router to access to every URL in the app
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'router'	//Dependency: router.js
], function($, _, Backbone, Router){
  var initialize = function() {
  	Router.initialize();
  }

  return {
  	initialize: initialize
  };
});