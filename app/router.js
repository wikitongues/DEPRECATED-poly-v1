import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('book', {path:'/books/:book_id'});
  this.route('new');
  this.route('login');
  this.route('profile');
});

export default Router;
