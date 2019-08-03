// Libraries
import { Navigation } from 'react-native-navigation';

import { Screens } from './navigation/screens';

// NAVIGATION - Default Options
Navigation.setDefaultOptions({
	topBar: {
		noBorder: true,
		backButton: {
			// title: 'Cancel',
			showTitle: false
		}
	},
	bottomTabs: {
		hideShadow: true
	}
});

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
