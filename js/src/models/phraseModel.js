App.Phrase = DS.Model.extend({
  book: DS.belongsTo("book"),
  sourcePhrase: DS.attr("string"),
  targetPhrase: DS.attr("string")
})