import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('beer', params.id);
	},
	setupController: function(controller, model) {
    	controller.set('model', model);
    	controller.set('newComment', this.store.createRecord('comment'));
  	},
  	actions: {
		comment: function() {
			var self = this;
			var comment = self.controller.get('newComment');
			var beer = self.controller.get('model');
			beer.get('comments').addObject(comment);
			comment.save().then(
				function() {
					beer.save().then(
						function() {
							self.controller.set('newComment', self.store.createRecord('comment', {}));
						}
					);
				}
			);
		},
		willTransition: function() {
			this.controller.get('newComment').destroyRecord();
			return true;
		}
	},
});