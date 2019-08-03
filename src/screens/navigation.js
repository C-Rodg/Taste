import { Navigation } from 'react-native-navigation';

// ---------------------- APPLICATION NAVIGATION -------------------------- //
// root -> StartInitializingScreen
// not logged in -> Sign In or Sign Up : Sign In || Sign Up
// logged in -> 3 tabs:
// 1.) Swipe Screen -> Filters side menu
// 2.) Connections Screen -> Calendar Screen || Read Message Screen
// 3.) Profile Screen -> Edit Profile Screen
// ----------------------------------------------------------------------- //

// STACK - Authentication routes
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

// STACK - main application routes
export const goToHome = () =>
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
						id: 'FilterSideMenu',
						name: 'taste.FilterSideMenu'
					}
				},
				center: {
					bottomTabs: {
						options: {
							bottomTabs: {
								hideShadow: true
							}
						},
						id: 'mainApplicationTabs',
						children: [
							{
								stack: {
									children: [
										{
											component: {
												id: 'SwipeScreen',
												name: 'taste.SwipeScreen',
												options: {
													bottomTab: {
														fontSize: 12,
														text: 'Home'
													},
													topBar: {
														noBorder: true,
														title: {
															text: 'Taste'
														}
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
												id: 'ConnectionsScreen',
												name: 'taste.ConnectionsScreen',
												options: {
													bottomTab: {
														fontSize: 12,
														text: 'Connections'
													},
													topBar: {
														noBorder: true,
														title: {
															text: 'Connections'
														}
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
												id: 'ProfileScreen',
												name: 'taste.ProfileScreen',
												options: {
													bottomTab: {
														fontSize: 12,
														text: 'Profile'
													},
													topBar: {
														noBorder: true,
														title: {
															text: 'Profile'
														}
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
