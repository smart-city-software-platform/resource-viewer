import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    let coords = this.get('coords');

    let lat = coords.split(/"/)[1];
    let lng = coords.split(/"/)[3];

    console.log(coords);
    console.log(lat);
    console.log(lng);

    let myLatlng = new google.maps.LatLng(lat, lng);

    var mapOptions = {
      zoom: 15,
      center: myLatlng,
    };  

    let map = new google.maps.Map(document.getElementById("map"),mapOptions);

    let marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
    });
  }

});