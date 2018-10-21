import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  click
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | denis toledo', function(hooks) {
  setupApplicationTest(hooks);

  test('should show portfolio as the home page', async function(assert) {
    await visit('/');
    assert.equal(
      currentURL(),
      '/portfolio',
      'should redirect automatically'
    );
  });

  test('should link to portfolio page', async function(assert) {
    await visit('/');
    await click('.btn-portfolio');
    assert.equal(
      currentURL(),
      '/portfolio',
      'should navigate to portfolio'
    );
  });

  test('should link to about page', async function(assert) {
    await visit('/');
    await click('.btn-about');
    assert.equal(
      currentURL(),
      '/about',
      'should navigate to about'
    );
  });

  test('should link to contact page', async function(assert) {
    await visit('/');
    await click('.btn-contact');
    assert.equal(
      currentURL(),
      '/contact',
      'should navigate to contact'
    );
  });
});
