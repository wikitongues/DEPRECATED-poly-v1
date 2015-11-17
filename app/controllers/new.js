import Ember from 'ember';
// import ENV from '../config/environment';

export default Ember.Controller.extend({
  actions: {
    favorite: function() {
      this.toggleProperty('favorite');
    },

    saveBook: function() {
      // var ref = new Firebase(ENV.firebase);
      // var authData = ref.getAuth();
      var controller = this;
      // if(this.get('model.title') &&
      //   this.get('model.sourceLanguage') &&
      //   this.get('model.targetLanguage')) {
        this.get('model').set('timeCreated', new Date());
        // this.get('model').set('author', authData.uid)
        this.get('model').save().then(function() {
          controller.transitionToRoute('/books/'+controller.get('model.id'));
        });
      // } else {
      //   alert('Please fill out the title and languages before continuing')
      // }
    }
  }
});
