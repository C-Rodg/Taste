// Libraries
import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { EDIT_PROFILE_SCREEN } from '../navigation/screens';

class ProfileScreen extends Component {
	componentDidMount() {
		// Listen for navigation button presses
		this.navigationEventListener = Navigation.events().bindComponent(this);
	}
	componentWillUnmount() {
		// Remove event listener
		if (this.navigationEventListener) {
			this.navigationEventListener.remove();
		}
	}

	// EVENT - navigation button pressed
	navigationButtonPressed({ buttonId }) {
		if (buttonId === 'button-edit-profile') {
			// Show edit profile modal
			Navigation.showModal({
				stack: {
					children: [
						{
							component: {
								name: EDIT_PROFILE_SCREEN
							}
						}
					]
				}
			});
		}
	}
	render() {
		return (
			<SafeAreaView>
				<View>
					<Text>Profile Screen</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export default ProfileScreen;
