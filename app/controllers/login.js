import Ember from 'ember';
import UserManagement from '../mixins/user-management';

export default Ember.Controller.extend(UserManagement, {
  session: Ember.inject.service('session'),
  actions: {
    NavigateToCreateAccount: function() {
      Ember.$("ul.counter").addClass("active").children().removeClass("active");
      Ember.$("ul.counter li.createAccount").addClass("active");
      Ember.$(".container").attr("class","container").addClass("createAccount");
    },

    NavigateToForgotPassword: function() {
      Ember.$("ul.counter").addClass("active").children().removeClass("active");
      Ember.$("ul.counter li.forgotPassword").addClass("active");
      Ember.$(".container").attr("class","container").addClass("resetPassword");
    },

    NavigateToSignIn: function() {
      Ember.$("ul.counter").addClass("active").children().removeClass("active");
      Ember.$("ul.counter li.signIn").addClass("active");
      Ember.$(".container").attr("class","container").addClass("signIn");
    },

    signIn: function() {
        this._signInUser(this.get('email'), this.get('password'));
    },

    createAccount: function() {
      var email = this.get('newUserEmail');
      var password = this.get('newUserPassword');

      this.createUser(
        email,
        this.get('newUserPassword'),
        (error, userData)  => {
          if (error) {
              console.log("Error creating user:", error);
            } else {
               // var store = this.get('model.store');
               var user = this.store.createRecord('user',{
                email: email,
                uid: userData.uid,
                picture: "boobies"
              });
               user.save().then(() => {
                  this._signInUser(email, password);
               });
            }
          }
      );
    },

    resetPassword: function() {
      this.resetPassword(
        this.get('resetPasswordEmail')
      );
    },

    changePassword: function() {
      this.changePassword(
        this.get('changePasswordEmail'),
        this.get('oldPassword'),
        this.get('changePasswords')
      );
    }
    // sign in upon successful account creation
    // for future reference,
    // delete users
    // changing emails
  },
    _signInUser(email, password) {
         this.get('session').authenticate('authenticator:firebase', {
            'email': email,
            'password': password
        }).then(
          function() {
            this.transitionToRoute('index');
          }.bind(this),
          function(reason) {
            this.set('errorMessage', reason.message);
          }.bind(this)
        );
    }
});
