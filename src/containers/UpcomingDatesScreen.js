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

class UpcomingDatesScreen extends Component {
	static get options() {
		return {
			topBar: {
				title: {
					text: 'Upcoming Dates'
				},
				leftButtons: [
					{
						id: 'button-close',
						text: 'Back',
						fontFamily: 'Fira Sans'
					}
				],
				rightButtons: []
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
		}
	}

	render() {
		return (
			<SafeAreaView>
				<View>
					<Text>List of all my upcoming dates...</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export default UpcomingDatesScreen;
