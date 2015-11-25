import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  menuOpen: false,
  sortOpen: false,
  actions: {
    logout: function() {
        this.get('session').invalidate().then(function() {
            this.transitionToRoute('/');
        }.bind(this));
    },

    toggleMenu: function() {
      if( this.get("menuOpen", true)) {
        this.set("menuOpen", false);
      } else {
        this.set("menuOpen", true);
      }
    },

    toggleSort: function() {
      if( this.get("sortOpen", true)) {
        this.set("sortOpen", false);
      } else {
        this.set("sortOpen", true);
      }
    }
  }
});