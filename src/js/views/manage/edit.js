import MarkerCollection from '../../collections/placemarkers';

export default Marionette.ItemView.extend({
  template: Hub.templates.manage.edit,

  initialize: function() {
  },

  templateHelpers: function() {
    return {
      id: this.options.id
    };
  }
});
