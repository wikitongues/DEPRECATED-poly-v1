App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll("book")
  }
})