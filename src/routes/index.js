// Libraries
import React from 'react';
import {
	createSwitchNavigator,
	createStackNavigator,
	createBottomTabNavigator,
	createDrawerNavigator,
	createAppContainer
} from 'react-navigation';
import { Provider } from 'react-redux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

// Styles
import FONTS from '../styles/fonts';
import COLORS from '../styles/colors';

// Redux store
import { store } from '../redux/store/';

// Screens
import InitializingScreen from '../containers/InitializingScreen';
import SignInScreen from '../containers/SignInScreen';
import SwipeScreen from '../containers/SwipeScreen';
import ConnectionsScreen from '../containers/ConnectionsScreen';
import ProfileScreen from '../containers/ProfileScreen';
import FiltersScreen from '../containers/FiltersScreen';
import UpcomingDatesScreen from '../containers/UpcomingDatesScreen';
import MessagingScreen from '../containers/MessagingScreen';
import EditProfileScreen from '../containers/EditProfileScreen';

// Connected icon
import TabBarMessagesIcon from '../components/TabBarMessagesIcon';

// Default header props
const defaultNavigationOptions = {
	headerStyle: {
		elevation: 0, // remove shadow on android
		borderBottomWidth: 0 // remove border on iOS
	},
	headerTitleStyle: {
		fontFamily: FONTS.family.medium,
		fontWeight: FONTS.weights.medium,
		fontSize: 24,
		color: COLORS.black
	},
	headerRightContainerStyle: {
		paddingRight: 10
	}
};

// Authentication
const AuthStack = createStackNavigator(
	{ SignIn: SignInScreen },

	{
		initialRouteName: 'SignIn',
		headerLayoutPreset: 'center',
		defaultNavigationOptions
	}
);

// Swipe Screen
SwipeScreen.navigationOptions = ({ navigation }) => {
	return {
		title: 'Taste',

		headerRight: (
			<MaterialCommunityIcon
				color={COLORS.black}
				size={32}
				name="filter-variant"
				onPress={navigation.openDrawer}
			/>
		)
	};
};
const SwipeStack = createStackNavigator(
	{ Swipe: SwipeScreen },
	{
		initialRouteName: 'Swipe',
		defaultNavigationOptions,
		headerLayoutPreset: 'center',
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (
				<IonIcon name="md-radio-button-on" size={32} color={tintColor} />
			)
		}
	}
);

const ConnectionsStack = createStackNavigator(
	{
		Connections: ConnectionsScreen,
		Messaging: MessagingScreen,
		UpcomingDates: UpcomingDatesScreen
	},
	{
		initialRouteName: 'Connections',
		headerLayoutPreset: 'center',
		defaultNavigationOptions
	}
);
// Set Tab bar visible = false for modal routes
ConnectionsStack.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
		tabBarVisible = false;
	}

	return {
		tabBarVisible,
		tabBarIcon: ({ tintColor }) => <TabBarMessagesIcon tintColor={tintColor} />
	};
};
const ProfileStack = createStackNavigator(
	{ Profile: ProfileScreen, Edit: EditProfileScreen },
	{
		initialRouteName: 'Profile',
		headerLayoutPreset: 'center',
		defaultNavigationOptions
	}
);
// Set Tab bar visible = false for modal routes
ProfileStack.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
		tabBarVisible = false;
	}
	return {
		tabBarVisible,
		tabBarIcon: ({ tintColor }) => {
			return (
				<MaterialCommunityIcon name="account" size={32} color={tintColor} />
			);
		}
	};
};

// Tabs
const TabNavigator = createBottomTabNavigator(
	{
		Swipe: SwipeStack,
		Connections: ConnectionsStack,
		Profile: ProfileStack
	},
	{
		//initialRouteName: 'Swipe',
		tabBarOptions: {
			showLabel: false,
			showIcon: true,
			activeTintColor: COLORS.pink,
			inactiveTintColor: COLORS.gray,
			style: {
				paddingTop: 10,
				paddingBottom: 10, // TODO: may need to set to smaller for iOS
				backgroundColor: 'white',
				borderTopColor: 'transparent'
			}
		}
	}
);

// Drawer
const DrawerNavigator = createDrawerNavigator(
	{
		App: TabNavigator
	},
	{
		contentComponent: FiltersScreen
	}
);

// App Container
const AppContainer = createAppContainer(
	createSwitchNavigator(
		{
			Initializing: InitializingScreen,
			App: DrawerNavigator,
			Auth: AuthStack
		},
		{
			initialRouteName: 'Initializing'
		}
	)
);

// Wrap with redux
export default function Application() {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
}
