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
      console.log("hi")
      var progressElement = "<li class='entry'><ul><li class='source'><p><span class='progress'><span></span><span></span><span></span></span></p></li></ul></li>"
      // Ember.$(".addPhrase").toggleClass("open");
      Ember.$(".newPhrase").toggleClass("open");
      Ember.$(".book .content-wrapper ul.content").append(progressElement);
    },

    saveSource: function() {
      if(Ember.$(".newPhrase .input.source").val()!=="") {
        Ember.$(".book .content-wrapper ul.content .entry:last-of-type ul li.source p").html(Ember.$(".newPhrase .input.source").val()).parent().parent().append("<li class='target'><p><span class='progress'><span></span><span></span><span></span></span></p></li>");
        Ember.$(".newPhrase .input.source").hide();
        Ember.$(".newPhrase .input.target").show();
        Ember.$(".newPhrase .saveSource").hide();
        Ember.$(".newPhrase .saveTarget").show();
        Ember.$(".newPhrase .input.source").val("");
      }
    },

    saveTarget: function() {
      if(Ember.$(".newPhrase .input.target").val()!=="") {
        Ember.$(".newPhrase .input.source").show();
        Ember.$(".newPhrase .input.target").hide();
        Ember.$(".newPhrase .saveSource").show();
        Ember.$(".newPhrase .saveTarget").hide();
        Ember.$(".newPhrase .input.target").val("");
        Ember.$(".newPhrase").toggleClass("open");
        Ember.$(".addPhrase").toggleClass("open");

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
      Ember.$(".book .content-wrapper ul.content .entry:last-of-type").remove();
    }
  }
});
