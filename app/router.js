import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DemoENV.locationType
});

Router.map(function() {
	this.resource('beers', function() {
    	this.route('new');
  	});
});

export default Router;
