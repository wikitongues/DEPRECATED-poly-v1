App.NewController = Ember.Controller.extend({
  actions: {
    saveBook: function() {
      var controller = this;
      this.get('model').save().then(function() {
        controller.transitionToRoute('index')
      })
      // var book = this.store.createRecord('book',{
      //   title: this.get("title"),
        // description: this.get("description"),
        // sourceLanguage: this.get("sourceLanguage"),
        // targetLanguage: this.get("targetLanguage")
        // createdAt: new Date()
      // })
      //   book.save().then(function(book) {
      //   controller.set("title", "");
        // controller.set("description", "");
        // controller.set("sourceLanguage", "");
        // controller.set("targetLanguage", "");
        // controller.get("book.model").addObject(book)
      // })
    }
  }
})

