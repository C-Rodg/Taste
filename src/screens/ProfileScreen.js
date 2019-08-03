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
			Navigation.push(this.props.componentId, {
				component: {
					name: 'taste.EditProfileScreen',
					options: {
						topBar: {
							backButton: {
								title: 'Cancel'
							},
							rightButtons: [
								{
									id: 'button-save-edits',
									text: 'Done'
								}
							]
						}
					}
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
