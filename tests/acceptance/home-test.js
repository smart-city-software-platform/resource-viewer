import { test } from 'qunit';
import moduleForAcceptance from 'resource-viewer/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('h1').text(), 'Resources');
    assert.equal(find('th').first().text(), 'ID');
    assert.equal(find('th').get(1).innerHTML, 'Description');
  });
});
