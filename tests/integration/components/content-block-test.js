import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('content-block', 'Integration | Component | content block', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{content-block}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#content-block}}
      template block text
    {{/content-block}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
