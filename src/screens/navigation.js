import { Navigation } from 'react-native-navigation';

// Set the navigation to auth stack
export const goToAuth = () =>
	Navigation.setRoot({
		root: {
			stack: {
				id: 'Auth',
				children: [
					{
						component: {
							name: 'taste.SignInScreen'
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
