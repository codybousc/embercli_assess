import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  body: attr('string'),
  date: attr('string'),
  question: DS.belongsTo('question', {async: true})
});
