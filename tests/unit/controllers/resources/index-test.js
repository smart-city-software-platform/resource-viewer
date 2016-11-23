import { moduleFor, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';

moduleFor('controller:resources/index', 'Unit | Controller | resources/index', {
  // Specify the other units that are required for this test.
  needs: ['adapter:info']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('updateUuid', function(assert) {
  let controller = this.subject();
  assert.ok(controller);

  controller.send('updateUuid', 'ae9cf502-5ed2-47d4-914c-c1caec1c41c4');

  return wait().then(() => {
    assert.equal(controller.get('capability').Temperature[0].value, 28.237);
  });

});
