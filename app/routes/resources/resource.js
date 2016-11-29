import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').adapterFor('info').data(params.resource_id)
  },

  setupController: function(controller, model){
    this._super(controller, model); // do the default implementation since I'm overriding this func
    Ember.run.later(this, function(){
      this.refresh();
    }, 40000);
  },
});
