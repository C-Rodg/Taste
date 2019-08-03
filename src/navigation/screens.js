// Screens
import StartInitializingScreen from '../screens/StartInitializingScreen';
import SignInOrSignUpScreen from '../screens/SignInOrSignUpScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import SwipeScreen from '../screens/SwipeScreen';
import ConnectionsScreen from '../screens/ConnectionsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FilterSideMenu from '../screens/FilterSideMenu';

// Modals
import EditProfileScreen from '../screens/EditProfileScreen';
import UpcomingDatesScreen from '../screens/UpcomingDatesScreen';
import MessagingScreen from '../screens/MessagingScreen';

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
Screens.set(START_INITIALIZING_SCREEN, StartInitializingScreen);
Screens.set(SIGNIN_OR_SIGNUP_SCREEN, SignInOrSignUpScreen);
Screens.set(SIGNUP_SCREEN, SignUpScreen);
Screens.set(SIGNIN_SCREEN, SignInScreen);
Screens.set(SWIPE_SCREEN, SwipeScreen);
Screens.set(CONNECTIONS_SCREEN, ConnectionsScreen);
Screens.set(PROFILE_SCREEN, ProfileScreen);
Screens.set(FILTER_SIDE_MENU, FilterSideMenu);
Screens.set(EDIT_PROFILE_SCREEN, EditProfileScreen);
Screens.set(UPCOMING_DATES_SCREEN, UpcomingDatesScreen);
Screens.set(MESSAGING_SCREEN, MessagingScreen);
