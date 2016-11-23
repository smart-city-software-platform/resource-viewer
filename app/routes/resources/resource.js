import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').adapterFor('info').data(params.resource_id)
  }
});
