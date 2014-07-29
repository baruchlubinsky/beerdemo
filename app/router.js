import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DemoENV.locationType
});

Router.map(function() {
	this.resource('beers', function() {
    	this.route('new');
    	this.route('edit', {path: ':id/edit'});
  	});
});

export default Router;
