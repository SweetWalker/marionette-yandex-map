import Placemark from './marker';
import MarkerCollection from '../../collections/placemarkers';

export default Marionette.LayoutView.extend({
  template: Hub.templates.home,

  regions: {
    mapRegion: '#map-region'
  },

  ui: {},

  events: {},

  initialize: function() {},

  templateHelpers: function() {},

  onShow: function() {
    ymaps.ready(() => {
      let map = new ymaps.Map('map-region', {
        center: [37.64, 55.76],
        zoom: 12
      });

      var mapView = new Backbone.Ymaps.CollectionView({
        map: map,
        collection: new MarkerCollection(),
        geoItem: Placemark
      });

      mapView.render();
    });
  },
});
