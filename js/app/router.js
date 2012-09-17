define([
	// Libraries to load
  'jquery',
  'underscore',
  'backbone',
  // Views to load
  'views/home/main',
  'views/examples/list',
  'views/examples/detail'
], function($, _, Backbone, homeMainView, exampleListView, exampleDetailView){
	// All of the dependencies in the array above become parameters of the function to be managed
	var AppRouter = Backbone.Router.extend({
		routes: {
			'examples': 'showExamples',
			'example/:id': 'showExample',
			// Default
			'*actions': 'defaultAction'
		},

		showExamples: function() {
			exampleListView.render();
		},
		showExample: function(id) {
			exampleDetailView.show(id);
		},
		defaultAction: function(actions) {
			homeMainView.render();
		}
	});

	var initialize = function(){
		var app_router = new AppRouter();
		Backbone.history.start();
	};

  return {
  	initialize: initialize
  };
});