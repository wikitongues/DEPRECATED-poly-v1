import DS from 'ember-data';

export default DS.Model.extend({
  books: DS.hasMany('book', {async: true}),
  username: DS.attr('string')
});
