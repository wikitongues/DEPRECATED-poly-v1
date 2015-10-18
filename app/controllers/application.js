import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    logout: function() {
        this.get('session').invalidate().then(function() {
            this.transitionToRoute('/');
        }.bind(this));
    }
  }
});