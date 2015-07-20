App.Book = DS.Model.extend({
  title: DS.attr("string"),
  author: DS.attr("string"),
  url: DS.attr("string"),
  banner: DS.attr("string"),
  description: DS.attr("string"),
  favorite: DS.attr("boolean"),
  sourceLanguage: DS.attr("string"),
  sourceCode: DS.attr("string"),
  targetLanguage: DS.attr("string"),
  targetCode: DS.attr("string"),
  phrases: DS.hasMany("phrase", {async: true})
})