// Libraries
import { Navigation } from 'react-native-navigation';

// Screens
import App from './components/App';
import SignInSignUpScreen from './screens/SignInSignUpScreen';
import SwipeScreen from './screens/SwipeScreen';
import ConnectionsScreen from './screens/ConnectionsScreen';
import ProfileScreen from './screens/ProfileScreen';
import StartInitializingScreen from './screens/StartInitializingScreen';

// Register screens
// TODO: Move to Map() and just loop through
Navigation.registerComponent('taste.App', () => App);
Navigation.registerComponent(
	'taste.StartInitializingScreen',
	() => StartInitializingScreen
);
Navigation.registerComponent(
	'taste.SignInSignUpScreen',
	() => SignInSignUpScreen
);
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
				name: 'navigation.playground.WelcomeScreen'
			}
		}
	});
});

// TODO:
// implement the screen structure
// setup redux
// include UI library
// start building screens
