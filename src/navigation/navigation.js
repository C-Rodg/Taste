// Libraries
import { Navigation } from 'react-native-navigation';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

// ---------------------- APPLICATION NAVIGATION -------------------------- //
// root -> StartInitializingScreen
// not logged in -> Sign In or Sign Up : Sign In || Sign Up
// logged in -> 3 tabs:
// 1.) Swipe Screen -> Filters side menu
// 2.) Connections Screen -> Calendar Screen || Read Message Screen
// 3.) Profile Screen -> Edit Profile Screen
// ----------------------------------------------------------------------- //

// STACK - Authentication routes
export const goToAuth = () => {
	Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: {
							id: 'taste.SignInOrSignUpScreen',
							name: 'taste.SignInOrSignUpScreen',
							options: {
								topBar: {
									visible: false
								}
							}
						}
					}
				]
			}
		}
	});
};

// STACK - main application routes
export const goToHome = () => {
	// Load required icons
	loadAsyncNavigationIcons().then(iconArray => {
		Navigation.setRoot({
			root: {
				sideMenu: {
					options: {
						sideMenu: {
							animationType: 'parallax',
							openGestureMode: 'bezel'
						}
					},
					right: {
						component: {
							id: 'taste.FilterSideMenu',
							name: 'taste.FilterSideMenu'
						}
					},
					center: {
						bottomTabs: {
							id: 'mainApplicationTabs',
							children: [
								{
									stack: {
										children: [
											{
												component: {
													id: 'taste.SwipeScreen',
													name: 'taste.SwipeScreen',
													options: {
														bottomTab: {
															icon: iconArray[0]
														},
														topBar: {
															title: {
																text: 'Taste'
															},
															leftButtons: [],
															rightButtons: [
																{
																	id: 'button-filters',
																	icon: iconArray[3]
																}
															]
														}
													}
												}
											}
										]
									}
								},
								{
									stack: {
										children: [
											{
												component: {
													id: 'taste.ConnectionsScreen',
													name: 'taste.ConnectionsScreen',
													options: {
														bottomTab: {
															icon: iconArray[1]
														},
														topBar: {
															title: {
																text: 'Connections'
															},
															leftButtons: [],
															rightButtons: [
																{
																	id: 'button-upcoming',
																	icon: iconArray[4]
																}
															]
														}
													}
												}
											}
										]
									}
								},
								{
									stack: {
										children: [
											{
												component: {
													id: 'taste.ProfileScreen',
													name: 'taste.ProfileScreen',
													options: {
														bottomTab: {
															icon: iconArray[2]
														},
														topBar: {
															title: {
																text: 'Profile'
															},
															leftButtons: [],
															rightButtons: [
																{
																	id: 'button-edit-profile',
																	text: 'Edit'
																}
															]
														}
													}
												}
											}
										]
									}
								}
							]
						}
					}
				}
			}
		});
	});
};

// Load icons used in navigation
const loadAsyncNavigationIcons = async () => {
	const requiredIcons = await Promise.all([
		IonIcon.getImageSource('md-radio-button-on', 36, '#000'), // Plate icon
		MaterialCommunityIcon.getImageSource('forum', 36, '#000'), // Messaging icon
		MaterialCommunityIcon.getImageSource('account', 36, '#000'), // Profile icon
		MaterialCommunityIcon.getImageSource('filter-variant', 36, '#000'), // Filter icon
		MaterialCommunityIcon.getImageSource('calendar', 36, '#000') // Calendar icon
	]);
	return requiredIcons;
};
