import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sortBy: function(property) {
      this.model.set('sortProperties', property);
      this.model.set('sortAscending', !this.get('sortAscending'));
    }
  }
});
