import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord("book");
  },
  actions: {
    willTransition: function(transition) {
      var model = this.get('currentModel');
      if (model && model.get('isDirty')) {
        if (confirm("You have unsaved changes. Click OK to stay on the current page. Click cancel to discard these changes and move to the requested page.")) {
          transition.abort();
        } else {
          var author = this.get('currentModel');
          author.deleteRecord();
        }
      }
    }
  }
});
