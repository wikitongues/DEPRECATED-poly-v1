App.IndexController = Ember.ArrayController.extend({
  isFavorite: function() {
    return this.filterBy('favorite');
  }.property('@each.favorite'),
  isNew: function() {
    return this.filterBy('favorite', false);
  }.property('@each.favorite')
})

