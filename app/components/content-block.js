import Ember from 'ember';

export default Ember.Component.extend({
  isInactive: true,
  isActive: false,
  isSourceActive: false,
  isTargetActive: false,
  stopSource: false,
  actions: {
    addPhrase: function() {
      this.set('isInactive', false);
      this.set('isActive', true);
      this.set('isSourceActive', true);
      Ember.$('body').animate({scrollTop: Ember.$(document).innerHeight()},300);
      // create record
    },

    saveSource: function() {
      if(Ember.$(".newPhrase .input").val()!=="") {
        this.set('isSourceActive', false);
        this.set('isTargetActive', true);
        // set source
      }
    },

    saveTarget: function() {
      if(Ember.$(".newPhrase .input.target").val()!=="") {
        this.set('isTargetActive', false);
        this.set('isActive', false);
        this.set('isInactive', true);

        // set target
        // save phrase object

        var store = this.get('model.store');
        var controller = this;
        var phrase = store.createRecord('phrase',{
          book: this.get('model'),
          sourcePhrase: this.get("model.sourcePhrase"),
          targetPhrase: this.get("model.targetPhrase"),
          phraseTimestamp: new Date()
        });

        phrase.save().then(function(phrase) {
          controller.get("model.phrases").addObject(phrase);
          controller.set("model.sourcePhrase", "");
          controller.set("model.targetPhrase", "");
        });

        this.get("model").save();
      }
    },

    stopSource: function() {
      this.set('isInactive', true);
      this.set('isActive', false);
      this.set('isSourceActive', false);
    }
  }
});
