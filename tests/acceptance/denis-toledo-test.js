import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  click,
  findAll
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
    await click('[data-test-link-portfolio]');
    assert.equal(
      currentURL(),
      '/portfolio',
      'should navigate to portfolio'
    );
  });

  test('should link to about page', async function(assert) {
    await visit('/');
    await click('[data-test-link-about]');
    assert.equal(
      currentURL(),
      '/about',
      'should navigate to about'
    );
  });

  test('should link to contact page', async function(assert) {
    await visit('/');
    await click('[data-test-link-contact]');
    assert.equal(
      currentURL(),
      '/contact',
      'should navigate to contact'
    );
  });

  test('should list the portfolio', async function(assert) {
    await visit('/');
    assert.equal(
      findAll('[data-test-portfolio-list]').length,
      3,
      'should display 3 works'
    );
  });
});
