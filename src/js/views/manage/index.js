import CreateView from './create';
import EditView from './edit';

export default Marionette.LayoutView.extend({
  template: Hub.templates.manage,

  regions: {
      contentRegion: '#manage-control-form'
  },

  ui: {
    addBtn: '.js-add-btn',
    menuItem: '.menu-item'
  },

  events: {
    'click @ui.addBtn': 'addMarker',
    'click @ui.menuItem': 'goToEdit'
  },

  initialize: function(){

  },

  templateHelpers: function() {
    return {
      menuItems: this.collection.toJSON()
    };
  },

  onRender: function() {
    this.contentRegion.show(
      new CreateView()
    );
  },

  addMarker: function() {
    this.collection.push({ name: 'duck' });
    this.render();
  },

  goToEdit: function(evt) {
    this.contentRegion.show(
      new EditView({
        id: $(evt.target).attr('data-id')
      })
    );
  }
});
