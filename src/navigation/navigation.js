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
														fontSize: 12,
														text: 'Home'
													},
													topBar: {
														title: {
															text: 'Taste'
														},
														leftButtons: [],
														rightButtons: [
															{
																id: 'button-filters',
																//icon: require('icon.png')
																text: 'Filters'
																//component: { name: 'taste.IconFilter' }
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
														fontSize: 12,
														text: 'Connections'
													},
													topBar: {
														title: {
															text: 'Connections'
														},
														leftButtons: [],
														rightButtons: [
															{
																id: 'button-upcoming',
																//icon: require('icon.png')
																text: 'Upcoming'
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
														fontSize: 12,
														text: 'Profile'
													},
													topBar: {
														title: {
															text: 'Profile'
														},
														leftButtons: [],
														rightButtons: [
															{
																id: 'button-edit-profile',
																//icon: require('icon.png')
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
