import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord("book");
  },
  actions: {
    willTransition: function(transition) {
      var model = this.get('currentModel');
      if (model && model.get('isDirty')) {
        if (confirm("You have unsaved changes. Click OK to discard these changes. Click cancel to continue editing.")) {
          var author = this.get('currentModel');
          author.deleteRecord();
        } else {
          transition.abort();
        }
      }
    }
  }
});
