// Libraries
import { Navigation } from 'react-native-navigation';

// Screens
import SignInOrSignUpScreen from './screens/SignInOrSignUpScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import SwipeScreen from './screens/SwipeScreen';
import ConnectionsScreen from './screens/ConnectionsScreen';
import ProfileScreen from './screens/ProfileScreen';
import StartInitializingScreen from './screens/StartInitializingScreen';

// Register screens
// TODO: Move to Map() and just loop through

// Root Component
Navigation.registerComponent(
	'taste.StartInitializingScreen',
	() => StartInitializingScreen
);
// Authentication Stack
Navigation.registerComponent(
	'taste.SignInOrSignUpScreen',
	() => SignInOrSignUpScreen
);
Navigation.registerComponent('taste.SignUpScreen', () => SignUpScreen);
Navigation.registerComponent('taste.SignInScreen', () => SignInScreen);

// Main Application Stack
Navigation.registerComponent('taste.SwipeScreen', () => SwipeScreen);
Navigation.registerComponent(
	'taste.ConnectionsScreen',
	() => ConnectionsScreen
);
Navigation.registerComponent('taste.ProfileScreen', () => ProfileScreen);

// Set the root
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
