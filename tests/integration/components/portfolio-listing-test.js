import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  find
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | portfolio-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.portfolio = EmberObject.create({
      title: 'test-title',
      category: 'test-category',
      description: 'test-description',
      img: 'fake.jpg',
      alt: 'test-alt',
      skills: 'test-skills'
    });
  });

  test('should display portfolio details', async function(assert) {
    await render(hbs`{{portfolio-listing portfolio=portfolio}}`);
    assert.equal(
      find('[data-test-portfolio-title]').textContent.trim(),
      'test-title',
      'test-title'
    );
    assert.equal(
      find('[data-test-portfolio-category]').textContent.trim(),
      'test-category',
      'test-category'
    );
    assert.equal(
      find('[data-test-portfolio-description]').textContent.trim(),
      'test-description',
      'test-description'
    );
    assert.ok(
      find('[data-test-portfolio-img]'),
      'test-img rendered',
    );
    assert.dom('[data-test-portfolio-img]').hasAttribute(
      'alt',
      'test-alt',
      'test-alt'
    );
    assert.equal(
      find('[data-test-portfolio-skills]').textContent.trim(),
      'test-skills',
      'test-skills'
    );
  });
});
