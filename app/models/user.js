import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  books: DS.hasMany('book', {async: true}),
  picture: DS.attr('string'),
  uid: DS.attr('string')
});
