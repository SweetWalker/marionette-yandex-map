import MapView from './map';
import MarkerCollection from '../../collections/placemarkers';

export default Marionette.LayoutView.extend({
  template: Hub.templates.manage,

  regions: {
      mapRegion: '#map-region'
  },

  ui: {},

  events: {},

  initialize: function() {},

  templateHelpers: function() {},

  onRender: function() {
    this.mapRegion.show(
      new MapView({
        collection: new MarkerCollection()
      })
    );
  },
});
