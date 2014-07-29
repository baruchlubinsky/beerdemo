import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {return this.store.createRecord('beer');},
	actions: {
		create: function() {
			var self = this;
			this.controller.get('model').save().then(
				function() {
					self.transitionTo('beers.index');
				});
		}
	}
});