// Libraries
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// Screens
import { Screens } from './navigation/screens';

// Setup
import { setNavigationDefaultOptions } from './navigation/navigation';
import { store } from './redux/store';

// NAVIGATION - Set default options
setNavigationDefaultOptions();

// NAVIGATION - Register screens with or without redux
Screens.forEach((screen, key) => {
	screen.isConnected
		? Navigation.registerComponentWithRedux(
				key,
				() => screen.component,
				Provider,
				store
		  )
		: Navigation.registerComponent(key, () => screen.component);
});

// NAVIGATION - set the root of the application
Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			component: {
				id: 'StartInitializingScreen',
				name: 'taste.StartInitializingScreen'
			}
		}
	});
});
