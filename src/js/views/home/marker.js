export default Backbone.Ymaps.Placemark.extend({
    placemarkOptions: {
        draggable: true
    },
    initialize: function() {
        var colors = Object.keys(this.styles),
            idx = _.random(0, colors.length);

        this.setStyle(colors[idx]);
    },
    hintContent: 'Click on me!',
    balloonContent: function() {
        return [
            'Hi!',
            'I\'m',
            this.model.get('title') + '.',
            'My coordinates: ',
            this.model.get('lat'),
            ',',
            this.model.get('lon')
        ].join(' ');
    },
    iconContent: function() {
        return this.model.cid.slice(1);
    }
});
