import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | denis toledo', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('should show portfolios as the home page', async function(assert) {

  });

  test('should link to about page', async function(assert) {

  });

  test('should link to contact page', async function(assert) {

  });
});
