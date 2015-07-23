App.NewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord("book")
  }
})