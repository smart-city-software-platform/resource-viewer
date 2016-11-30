import { test } from 'qunit';
import moduleForAcceptance from 'resource-viewer/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | resources/resource');

test('visiting /resources/resource', function(assert) {
  visit('/resources/resource');

  andThen(function() {
    assert.equal(currentURL(), '/resources/resource');
  });
});

test('show sensor infos', function(assert) {
  visit('/resources/resource');

  andThen(function() {
    assert.equal(find('h2').get(0).innerHTML, 'Sensor ID: ae9cf502-5ed2-47d4-914c-c1caec1c41c4');
    assert.equal(find('h4').get(0).innerHTML, '[\"-12\", \"-58\"]');
  });
});