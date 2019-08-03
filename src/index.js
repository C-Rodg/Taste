// Libraries
import { Navigation } from 'react-native-navigation';

// Screens
import { Screens } from './navigation/screens';

// Actions
import { setNavigationDefaultOptions } from './navigation/navigation';

// NAVIGATION - Set default options
setNavigationDefaultOptions();

// NAVIGATION - Register screens
Screens.forEach((screenComponent, key) =>
	Navigation.registerComponent(key, () => screenComponent)
);

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

// TODO:
// implement the screen structure
// setup redux
// include UI library
// start building screens
