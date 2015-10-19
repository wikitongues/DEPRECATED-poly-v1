import Ember from 'ember';
import UserManagement from '../mixins/user-management'

export default Ember.Controller.extend(UserManagement, {
  session: Ember.inject.service('session'),
  actions: {
    login: function() {
        this.get('session').authenticate('authenticator:firebase', {
            'email': this.get('email'),
            'password': this.get('password')
        }).then(
          function() {
            this.transitionToRoute('index');
          }.bind(this),
          function(reason) {
            this.set('errorMessage', reason.message);
          }.bind(this)
        );
    },

    NavigateToCreateAccount: function() {
      Ember.$("ul.counter").addClass("active").children().removeClass("active")
      Ember.$("ul.counter li.createAccount").addClass("active")
      Ember.$(".container").attr("class","container").addClass("createAccount")
    },

    NavigateToForgotPassword: function() {
      Ember.$("ul.counter").addClass("active").children().removeClass("active")
      Ember.$("ul.counter li.forgotPassword").addClass("active")
      Ember.$(".container").attr("class","container").addClass("resetPassword")
    },

    NavigateToSignIn: function() {
      Ember.$("ul.counter").addClass("active").children().removeClass("active")
      Ember.$("ul.counter li.signIn").addClass("active")
      Ember.$(".container").attr("class","container").addClass("signIn")
    },

    createAccount: function() {
      this.createUser(
        this.get('newUserEmail'),
        this.get('newUserPassword')
        )
    },

    resetPassword: function() {
      this.resetPassword(
        this.get('resetPasswordEmail')
      )
    },

    changePassword: function() {
      this.changePassword(
        this.get('changePasswordEmail'),
        this.get('oldPassword'),
        this.get('changePasswords')
      )
    }
    // for future reference,
    // delete users
    // changing emails
  }
});
