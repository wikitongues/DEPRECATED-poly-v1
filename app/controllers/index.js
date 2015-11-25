import Ember from 'ember';

export default Ember.Controller.extend({
    sortOpen: false,
    queryParams: ['sortBy', 'order'],
    sortBy: 'timeCreated',
    order: 'desc',
    modelSort: Ember.computed('sortBy', 'order', {
      get() {
        return [`${this.get('sortBy')}:${this.get('order')}`];
      }
    }),
    sortedBooks: Ember.computed.sort('model', 'modelSort'),
    actions: {
      toggleSort: function() {
        if( this.get("sortOpen", true)) {
          this.set("sortOpen", false);
        } else {
          this.set("sortOpen", true);
        }
      }
    }
});
