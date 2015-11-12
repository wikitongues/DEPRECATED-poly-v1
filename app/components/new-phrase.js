import Ember from 'ember';

export default Ember.Component.extend({
  sourcePhrase:"",
  targetPhrase:"",
  actions: {
    addPhrase: function() {
      Ember.$(".empty").toggle()
      var progressElement = "<li class='entry' id='progressElement'><ul><li class='source'><p><span class='progress'><span></span><span></span><span></span></span></p></li></ul></li>";
      Ember.$(".addPhrase").toggleClass("open");
      Ember.$(".newPhrase").toggleClass("open");
      Ember.$(".book .content-wrapper ul.content").append(progressElement);
      Ember.$('body').animate({scrollTop: Ember.$(document).innerHeight()},300)
      // create record
    },

    saveSource: function() {
      var sourceVal = Ember.$(".newPhrase .input.source").val();
      var progressElement = "<li class='target'><p><span class='progress'><span></span><span></span><span></span></span></p></li>";
      if(Ember.$(".newPhrase .input.source").val()!=="") {
        Ember.$("#progressElement li.source p").html(sourceVal);
        Ember.$("#progressElement ul").append(progressElement);
        Ember.$(".newPhrase").children("input.source, .saveSource").hide();
        Ember.$(".newPhrase").children("input.target, .saveTarget").show();
        Ember.$(".newPhrase .input.source").val("");
        // set source
      }
    },

    saveTarget: function() {
      if(Ember.$(".newPhrase .input.target").val()!=="") {
        Ember.$(".newPhrase").children("input.target, .saveTarget").hide();
        Ember.$(".newPhrase").children("input.source, .saveSource").show();
        Ember.$(".newPhrase .input.target").val("");
        Ember.$(".newPhrase, .addPhrase").toggleClass("open");

        // set target
        // save phrase object

        var store = this.get('model.store')
        var controller = this;
        var phrase = store.createRecord('phrase',{
          book: this.get('model'),
          sourcePhrase: this.get("model.sourcePhrase"),
          targetPhrase: this.get("model.targetPhrase"),
          phraseTimestamp: new Date()
        });

        phrase.save().then(function(phrase) {
          controller.get("model.phrases").addObject(phrase);
          controller.set("sourcePhrase", "");
          controller.set("targetPhrase", "");
        });

        this.get("model").save();
      }

      Ember.$("#progressElement").remove();
    }
  }
});
