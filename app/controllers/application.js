import Ember from 'ember';

export default Ember.Controller.extend({

  capability: '',

  actions: {
    updateUuid(uuid) {
      Ember.run(() => {
        this.get('store').findRecord('info', uuid)
        .then((result) => {
          this.set('capability', result.get('capabilities'));
        });
      });
    }
  }
});
