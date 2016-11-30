import Ember from 'ember';

export default Ember.Route.extend({
  
  interval: '',

  model(params){
    return this.get('store').adapterFor('info').data(params.resource_id);
  },

  setupController: function(controller, model){
    this._super(controller, model); // do the default implementation since I'm overriding this func

    this.interval = setTimeout(() => {
      this.refresh();
    }, 5000);
  },

  deactivate() {
    this._super();
    clearTimeout(this.interval);
    //no longer exit

  }


});
