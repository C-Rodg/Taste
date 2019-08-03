import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

class ConnectionsScreen extends Component {
	static options(passProps) {
		return {
			topBar: {
				leftButtons: [],
				rightButtons: [
					{
						id: 'button-upcoming',
						//icon: require('icon.png')
						text: 'Upcoming'
					}
				]
			}
		};
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
