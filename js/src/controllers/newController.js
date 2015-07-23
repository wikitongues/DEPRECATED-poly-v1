App.NewController = Ember.Controller.extend({
  actions: {
    saveBook: function() {
      var controller = this,
      newId = this.get('model.id');
      console.log(newId)
      this.get('model').save().then(function() {
        controller.transitionToRoute('/books/'+newId)
      })
    }
  }
})

