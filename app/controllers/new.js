import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    favorite: function() {
      this.toggleProperty('favorite');
    },

    saveBook: function() {
      var controller = this;
        this.get('model').set('timeCreated', new Date());
        this.get('model').save().then(function() {
          controller.transitionToRoute('/books/'+controller.get('model.id'));
        });
    }
  }
});
