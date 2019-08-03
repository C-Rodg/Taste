// Libraries
import { Navigation } from 'react-native-navigation';

// Screens
import { Screens } from './navigation/screens';

// Styles
import colors from './styles/colors';

// NAVIGATION - Default Options
Navigation.setDefaultOptions({
	topBar: {
		noBorder: true,
		backButton: {
			showTitle: false
		},
		title: {
			fontSize: 21,
			color: colors.BLACK
		}
	},
	bottomTabs: {
		hideShadow: true
	},
	bottomTab: {
		selectedIconColor: colors.PINK
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
