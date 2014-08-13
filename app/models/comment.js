import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  message: DS.attr('string'),
  beer: DS.belongsTo('beer'),
});