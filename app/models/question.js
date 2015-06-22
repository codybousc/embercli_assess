import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  title: attr('string'),
  body: attr('string'),
  date: attr('string'),
  answers: DS.hasMany('answer', {async: true})
});
