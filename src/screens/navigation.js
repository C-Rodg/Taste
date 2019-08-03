import { Navigation } from 'react-native-navigation';

// Set the navigation to auth stack
export const goToAuth = () =>
	Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: {
							id: 'SignInOrSignUpScreen',
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

// Set the navigation to home stack
export const goToHome = () =>
	Navigation.setRoot({
		root: {
			bottomTabs: {
				id: 'BottomTabsId',
				children: [
					{
						component: {
							name: 'taste.SwipeScreen',
							options: {
								bottomTab: {
									fontSize: 12,
									text: 'Home'
								}
							}
						}
					},
					{
						component: {
							name: 'taste.ConnectionsScreen',
							options: {
								bottomTab: {
									fontSize: 12,
									text: 'Connections'
								}
							}
						}
					},
					{
						component: {
							name: 'taste.ProfileScreen',
							options: {
								bottomTab: {
									fontSize: 12,
									text: 'Profile'
								}
							}
						}
					}
				]
			}
		}
	});

// ---------- APPLICATION NAVIGATION ------------ //
// root -> StartInitializingScreen
// not logged in -> Sign In or Sign Up : Sign In || Sign Up
// logged in -> 3 tabs:
// 1.) Swipe Screen -> Filters side menu
// 2.) Connections Screen -> Calendar Screen || Read Message Screen
// 3.) Profile Screen -> Edit Profile Screen
