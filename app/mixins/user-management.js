import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Mixin.create({
  firebase: new Firebase(ENV.firebase),
  createUser: function(email, password, callback) {
    this.firebase.createUser({
      email: email,
      password: password
    },
      callback
    );
  },

  resetPassword: function(email) {
    this.firebase.resetPassword({
      email : email
    }, function(error) {
      if (error === null) {
        console.log("Password reset email sent successfully");
      } else {
        console.log("Error sending password reset email:", error);
      }
    });
  },

  changePassword: function(email, oldPassword, newPassword) {
    this.firebase.changePassword({
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword
    }, function(error) {
      if (error === null) {
        console.log("Password changed successfully");
      } else {
        console.log("Error changing password:", error);
      }
    });
  }
});
