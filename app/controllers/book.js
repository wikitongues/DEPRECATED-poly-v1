import Ember from 'ember';

export default Ember.Controller.extend({
  sourcePhrase:"hello",
  targetPhrase:"",
  actions: {
    favorite: function() {
      this.toggleProperty('model.favorite');
      this.get('model').save();
    },

    deleteBook: function() {
      var model = this;
      if (confirm("Are you sure?")) {
        this.get('model.phrases').invoke('destroyRecord');
        this.get('model').destroyRecord().then(function() {
          model.transitionToRoute('/');
        });
      }
    }
  }
});
