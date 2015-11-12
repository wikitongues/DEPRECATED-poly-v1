import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  timeCreated: DS.attr("date"),
  // author: DS.belongsTo("user"),
  banner: DS.attr("string"),
  description: DS.attr("string"),
  favorite: DS.attr("boolean"),
  sourceLanguage: DS.attr("string"),
  targetLanguage: DS.attr("string"),
  phrases: DS.hasMany("phrase", {async: true})
});
