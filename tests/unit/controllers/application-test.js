import { moduleFor, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
// import Ember from 'ember';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  unit: true,
  needs: ['model:info', 'adapter:info']
});

test('updateUuid', function(assert) {
  let controller = this.subject();
  assert.ok(controller);

  controller.send('updateUuid', 3);

  return wait().then(() => {
    assert.equal(controller.get('capability').Temperature[0].value, 28.237);
  });

});
