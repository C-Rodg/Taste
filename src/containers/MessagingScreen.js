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

class MessagingScreen extends Component {
	static get options() {
		return {
			topBar: {
				title: {
					text: 'PERSONS_NAME'
				},
				backButton: {
					showTitle: false
				}
			}
		};
	}

	render() {
		return (
			<SafeAreaView>
				<View>
					<Text>Messages with this person...</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export default MessagingScreen;
