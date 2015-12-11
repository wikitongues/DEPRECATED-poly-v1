import DS from 'ember-data';

export default DS.Model.extend({
  book: DS.belongsTo("book"),
  sourcePhrase: DS.attr("string"),
  sourceVideo: DS.attr("string"),
  sourcePoster: DS.attr("string"),
  sourceAudio: DS.attr("string"),
  targetPhrase: DS.attr("string"),
  targetVideo: DS.attr("string"),
  targetPoster: DS.attr("string"),
  targetAudio: DS.attr("string"),
  phraseTimestamp: DS.attr("date")
});
