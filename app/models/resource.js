import DS from 'ember-data';

export default DS.Model.extend({
  uri: DS.attr('string'),
  createdAt: DS.attr('string'),
  updatedAt: DS.attr('string'),
  lat: DS.attr('number'),
  lon: DS.attr('number'),
  status: DS.attr('string'),
  collectInterval: DS.attr('number'),
  description: DS.attr('string'),
  uuid: DS.attr('string'),
  city: DS.attr('string'),
  neighborhood: DS.attr('string'),
  state: DS.attr('string'),
  postalCode: DS.attr('string'),
  country: DS.attr('string')
});
