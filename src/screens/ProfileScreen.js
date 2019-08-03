import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

class ProfileScreen extends Component {
	static options(passProps) {
		return {
			topBar: {
				leftButtons: [],
				rightButtons: [
					{
						id: 'button-edit',
						//icon: require('icon.png')
						text: 'Edit'
					}
				]
			}
		};
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
