// Screens
import StartInitializingScreen from '../containers/StartInitializingScreen';
import SignInOrSignUpScreen from '../containers/SignInOrSignUpScreen';
import SignUpScreen from '../containers/SignUpScreen';
import SignInScreen from '../containers/SignInScreen';
import SwipeScreen from '../containers/SwipeScreen';
import ConnectionsScreen from '../containers/ConnectionsScreen';
import ProfileScreen from '../containers/ProfileScreen';
import FilterSideMenu from '../containers/FilterSideMenu';

// Modals
import EditProfileScreen from '../containers/EditProfileScreen';
import UpcomingDatesScreen from '../containers/UpcomingDatesScreen';
import MessagingScreen from '../containers/MessagingScreen';

// Screen Keys
export const START_INITIALIZING_SCREEN = 'taste.StartInitializingScreen';
export const SIGNIN_OR_SIGNUP_SCREEN = 'taste.SignInOrSignUpScreen';
export const SIGNUP_SCREEN = 'taste.SignUpScreen';
export const SIGNIN_SCREEN = 'taste.SignInScreen';
export const SWIPE_SCREEN = 'taste.SwipeScreen';
export const CONNECTIONS_SCREEN = 'taste.ConnectionsScreen';
export const PROFILE_SCREEN = 'taste.ProfileScreen';
export const FILTER_SIDE_MENU = 'taste.FilterSideMenu';
export const EDIT_PROFILE_SCREEN = 'taste.EditProfileScreen';
export const UPCOMING_DATES_SCREEN = 'taste.UpcomingDatesScreen';
export const MESSAGING_SCREEN = 'taste.MessagingScreen';

export const Screens = new Map();
Screens.set(START_INITIALIZING_SCREEN, {
	component: StartInitializingScreen,
	isConnected: false
});
Screens.set(SIGNIN_OR_SIGNUP_SCREEN, {
	component: SignInOrSignUpScreen,
	isConnected: false
});
Screens.set(SIGNUP_SCREEN, {
	component: SignUpScreen,
	isConnected: false
});
Screens.set(SIGNIN_SCREEN, {
	component: SignInScreen,
	isConnected: false
});
Screens.set(SWIPE_SCREEN, {
	component: SwipeScreen,
	isConnected: true
});
Screens.set(CONNECTIONS_SCREEN, {
	component: ConnectionsScreen,
	isConnected: false
});
Screens.set(PROFILE_SCREEN, {
	component: ProfileScreen,
	isConnected: false
});
Screens.set(FILTER_SIDE_MENU, {
	component: FilterSideMenu,
	isConnected: false
});
Screens.set(EDIT_PROFILE_SCREEN, {
	component: EditProfileScreen,
	isConnected: false
});
Screens.set(UPCOMING_DATES_SCREEN, {
	component: UpcomingDatesScreen,
	isConnected: false
});
Screens.set(MESSAGING_SCREEN, {
	component: MessagingScreen,
	isConnected: false
});
