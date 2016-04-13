import App from '../app';

import ManageView from '../views/manage';
import MarkerCollection from '../collections/placemarkers';

export default function() {
  App.getRegion('mainRegion').show(
    new ManageView({
      collection: new MarkerCollection()
    })
  );
}
