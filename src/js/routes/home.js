import App from '../app';
import HomeView from '../views/home';

export default function() {
  console.log('HOME ROUTE');
  App.mainRegion.show(
    new HomeView()
  )
}
