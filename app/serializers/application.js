import DS from 'ember-data';
// http://emberjs.com/api/data/classes/DS.RESTSerializer.html#method_serializeHasMany
export default DS.RESTSerializer.extend({
	serialize: function(record, options) {
	    var json = this._super(record, options);
	    record.eachRelationship(function(name, relationship) {
	      if (relationship.kind === 'hasMany') {
	        json[name] = record.get(name).mapBy('id');
	      }
	    });
	    return json;
	  }
});