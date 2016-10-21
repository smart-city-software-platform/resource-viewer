import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  uri: DS.attr('string'),
  created_at: DS.attr('string'),
  updated_at: DS.attr('string'),
  lat: DS.attr('number'),
  lon: DS.attr('number'),
  status: DS.attr('string'),
  collect_interval: DS.attr('number'),
  description: DS.attr('string'),
  uuid: DS.attr('string'),
  city: DS.attr('string'),
  neighborhood: DS.attr('string'),
  state: DS.attr('string'),
  postal_code: DS.attr('string'),
  country: DS.attr('string'),
  address: Ember.computed('city', 'neighborhood', function() {
      return `${this.get('city')} ${this.get('neighborhood')}`;
  }),
  capabilities: DS.attr()
});
