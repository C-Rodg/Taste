// Libraries
import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class ConnectionsScreen extends Component {
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
		if (buttonId === 'button-upcoming') {
			// TODO: push upcoming dates screen
		}
	}

	render() {
		return (
			<SafeAreaView>
				<View>
					<Text>Connections Screen</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export default ConnectionsScreen;
