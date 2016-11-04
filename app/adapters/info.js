import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  data(uuid){
  	var url = config.collector.replace("uuid", uuid);
    return  this.ajax(url, 'POST');
  }
});
