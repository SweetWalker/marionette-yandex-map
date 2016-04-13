import Model from '../models/placemarker';

export default Backbone.Collection.extend({
  url: '/markers',

  model: Model,
  initialize: function(){
    this.set([
      { id: 1, title: 'dog', lat: 55.768, lon: 37.646 },
      { id: 2, title: 'elephant', lat: 55.768, lon: 37.646 },
      { id: 3, title: 'cow', lat: 55.768, lon: 37.646 },
      { id: 4, title: 'crow', lat: 55.768, lon: 37.646 },
      { id: 5, title: 'row', lat: 55.768, lon: 37.646 },
      { id: 6, title: 'doe', lat: 55.768, lon: 37.646 }
    ])
  }
});
