import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  data(uuid){
    return  this.ajax(config.collector + '/resources/' + uuid + '/data/last', 'POST');
  }
});
