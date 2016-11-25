import Ember from 'ember';

export default Ember.Component.extend({

  lat: Ember.computed('coords', function() {
    return this.coords.split(/"/)[1];
  }),

  lng: Ember.computed('coords', function() {
    return this.coords.split(/"/)[3];
  }),

  myLatlng: Ember.computed('lat', 'lng', function() {
    return new google.maps.LatLng(this.get('lat'), this.get('lng'));
  }),

  map: Ember.computed('myLatlng', function() {
    var mapOptions = {
      zoom: 15,
      center: this.get('myLatlng'),
    };  
    return new google.maps.Map(document.getElementById("map"), mapOptions);
  }),

  marker: Ember.computed('map', 'myLatlng', function() {
    return new google.maps.Marker({
      position: this.get('myLatlng'),
      map: this.get('map'),
    });
  }),


  didInsertElement() {
    this.get('map');
    this.get('marker');
  }

});