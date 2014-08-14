import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: "http://everyrest.appspot.com",
	// host: "http://0.0.0.0:8080",
	ajax: function(url, method, hash) {
 		hash = hash || {}; // hash may be undefined
 		hash.crossDomain = true;
 		hash.xhrFields = {withCredentials: false};
 		return this._super(url, method, hash);		
 	}
});