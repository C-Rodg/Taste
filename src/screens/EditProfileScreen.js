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

class EditProfileScreen extends Component {
	static get options() {
		return {
			topBar: {
				backButton: {
					title: 'Cancel'
				}
			}
		};
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
