import Ember from 'ember';

export default Ember.Controller.extend({

  capability: '',

  actions: {
    updateUuid(uuid) {
      Ember.run(() => {
        this.get('store').adapterFor('info').data(uuid)
        .then((result) => {
          this.set('capability', result.resources[0].capabilities);
        });
      });
    }
  }
});
