import Ember from 'ember';
// import ENV from '../config/environment';

export default Ember.Controller.extend({
  model: function() {
    return this.get("user");
  },
  username: Ember.computed(function() {
    // var ref = new Firebase(ENV.firebase);
    // var authData = ref.getAuth();
    // this.get('model').set('username', authData.uid)
    return this.get("authData.uid");
  })


});
