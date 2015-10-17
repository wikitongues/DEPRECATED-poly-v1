import Ember from 'ember';
import UserManagementMixin from '../../../mixins/user-management';
import { module, test } from 'qunit';

module('Unit | Mixin | user management');

// Replace this with your real tests.
test('it works', function(assert) {
  var UserManagementObject = Ember.Object.extend(UserManagementMixin);
  var subject = UserManagementObject.create();
  assert.ok(subject);
});
