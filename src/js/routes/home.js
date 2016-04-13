import App from '../app';
import HomeView from '../views/home';

export default function() {
  App.mainRegion.show(
    new HomeView()
  );
}
