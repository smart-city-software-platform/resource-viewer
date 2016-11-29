import Ember from 'ember';

export default Ember.Component.extend({

  map: null,
  marker: null,

  lat: Ember.computed('coords', function() {
    return this.coords.split(/"/)[1];
  }),

  lng: Ember.computed('coords', function() {
    return this.coords.split(/"/)[3];
  }),

  myLatlng: Ember.computed('lat', 'lng', function() {
    return new google.maps.LatLng(this.get('lat'), this.get('lng'));
  }),

  didInsertElement() {
    let position = this.get('myLatlng');
    let mapOptions = {
      zoom: 8,
      center: position,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      imageDefaultUI: true
    };
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
    let marker = new google.maps.Marker({
      position: position,
      map: map,
    });

    this.set('map', map);
    this.set('marker', marker);
  },

  didUpdateAttrs() {
    let position = this.get('myLatlng');
    this.get('marker').setPosition(position);
    this.get('map').panTo(position);
  },
});