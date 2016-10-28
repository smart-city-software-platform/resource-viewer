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
    assert.equal(find('th').get(2).innerHTML, 'Address');
    assert.equal(find('th').get(3).innerHTML, 'Capacities');
    assert.equal(find('th').get(4).innerHTML, 'Collect Interval');
  });
});

test('get stream data', function(assert) {
  visit('/');
  click('table tbody tr th');
  andThen(() => assert.equal($('[role="tooltip"]').text().replace(/^\s+|\s+$/g, '').split(':')[0], 'Temperature'));
});
