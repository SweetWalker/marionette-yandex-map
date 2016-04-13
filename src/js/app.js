import HeaderView from './views/partials/header';
import HomeRoute from './routes/home';
import ManageRoute from './routes/manage';

const App = new Marionette.Application();
export default App

const Router = Backbone.Router.extend({

	routes: {
		'': 'home',
		'manage': 'manage'
	},

	home: HomeRoute,
	manage: ManageRoute

});

App.addRegions({
		headerRegion: '#header',
		mainRegion: '#main-app',
		footerRegion: '#footer'
});

App.on('before:start', () => {});

App.on('start', () => {
	App.getRegion('headerRegion').show(new HeaderView());
	new Router();
	Backbone.history.start();
});
