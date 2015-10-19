import DS from 'ember-data';

export default DS.Model.extend({
  book: DS.belongsTo("book"),
  sourcePhrase: DS.attr("string"),
  targetPhrase: DS.attr("string"),
  phraseTimestamp: DS.attr("date")
});
