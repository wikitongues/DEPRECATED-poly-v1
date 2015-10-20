import Ember from 'ember';

export default Ember.Controller.extend({
  sourcePhrase:"",
  targetPhrase:"",
  actions: {
    favorite: function() {
      this.toggleProperty('model.favorite');
      this.get('model').save();
    },

    deleteBook: function() {
      if (confirm("Are you sure?")) {
          var author = this.get('model');
          author.deleteRecord();
          this.get('model').save();
          this.transitionToRoute('/');
        }
    },

    addPhrase: function() {
      var progressElement = "<li class='entry' id='progressElement'><ul><li class='source'><p><span class='progress'><span></span><span></span><span></span></span></p></li></ul></li>"
      Ember.$(".addPhrase").toggleClass("open");
      Ember.$(".newPhrase").toggleClass("open");
      Ember.$(".book .content-wrapper ul.content").append(progressElement);
      // create record
    },

    saveSource: function() {
      var sourceVal = Ember.$(".newPhrase .input.source").val(),
      progressElement = "<li class='target'><p><span class='progress'><span></span><span></span><span></span></span></p></li>"
      if(Ember.$(".newPhrase .input.source").val()!=="") {
        Ember.$("#progressElement li.source p").html(sourceVal)
        Ember.$("#progressElement ul").append(progressElement);
        Ember.$(".newPhrase").children("input.source, .saveSource").hide()
        Ember.$(".newPhrase").children("input.target, .saveTarget").show()
        Ember.$(".newPhrase .input.source").val("");
      }
    },

    saveTarget: function() {
      if(Ember.$(".newPhrase .input.target").val()!=="") {
        Ember.$(".newPhrase").children("input.target, .saveTarget").hide()
        Ember.$(".newPhrase").children("input.source, .saveSource").show()
        Ember.$(".newPhrase .input.target").val("");
        Ember.$(".newPhrase, .addPhrase").toggleClass("open");

        var phrase = this.store.createRecord('phrase',{
          book: this.get('model'),
          sourcePhrase: this.get("model.sourcePhrase"),
          targetPhrase: this.get("model.targetPhrase"),
          phraseTimestamp: new Date()
        });

        var controller = this;
        phrase.save().then(function(phrase) {
          controller.set("sourcePhrase", "");
          controller.set("targetPhrase", "");
          controller.get("model.phrases").addObject(phrase);
        });
        this.get("model").save();

      }
      Ember.$("#progressElement").remove();
    }
  }
});
