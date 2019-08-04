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

class EditProfileScreen extends Component {
	static get options() {
		return {
			topBar: {
				title: {
					text: 'Edit Profile'
				},
				leftButtons: [
					{
						id: 'button-close',
						text: 'Cancel',
						fontFamily: 'Fira Sans'
					}
				],
				rightButtons: [
					{
						id: 'button-save',
						text: 'Save',
						fontFamily: 'Fira Sans'
					}
				]
			}
		};
	}

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
		if (buttonId === 'button-close') {
			// Close button pressed
			Navigation.dismissModal(this.props.componentId);
		} else if (buttonId === 'button-save') {
			// TODO: Save profile changes

			// Close modal
			Navigation.dismissModal(this.props.componentId);
		}
	}

	render() {
		return (
			<SafeAreaView>
				<View>
					<Text>Edit Profile now!!!</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export default EditProfileScreen;
