import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {return this.store.find('beer', params.id);},
	actions: {
		save: function() {
			var self = this;
			this.controller.get('model').save().then(
				function() {
					self.transitionTo('beers.index');
				});
		}
	}
});