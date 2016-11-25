import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('google-map', 'Integration | Component | google map', {
  integration: true
});

test('it renders', function(assert) {
  expect(0);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{google-map coords='[\"-12\", \"-58\"]'}}`);
  // assert.equal(this.$().text().trim(), 'Mapa:');
});

test('shows map', function(assert) {
  expect(3);

  this.render(hbs`{{google-map coords='[\"-12\", \"-58\"]'}}`);

  this.set('lat', '23');
  this.set('lng', '46');
  this.set('myLatlng', new google.maps.LatLng(this.get('lat'), this.get('lng')));

  assert.equal(this.get('myLatlng').lat(), this.get('lat'), 'has correct lat');
  assert.equal(this.get('myLatlng').lng(), this.get('lng'), 'has correct lng');

  var mapOptions = {
    zoom: 15,
    center: this.get('myLatlng'),
  };

  this.set('map', new google.maps.Map(document.getElementById("map"), mapOptions));

  assert.equal(this.get('map.center'), this.get('myLatlng'), 'map rendered, and has correct center')
});