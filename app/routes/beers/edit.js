import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {return this.store.find('beer', params.id);},
	actions: {
		save: function() {
			var self = this;
			self.controller.get('model').save().then(
				function() {
					self.transitionTo('beers.index');
				});
		},
		delete: function() {
			var self = this;
			var model = self.controller.get('model'); 
			model.destroyRecord().then(
				function() {
					self.transitionTo('beers.index');
				}, function (error) {
					Ember.Logger.debug(error);
				});
		}
	}
});