import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

class SignInScreen extends Component {
	static get options() {
		return {
			topBar: {
				title: {
					text: 'Sign In'
				}
			}
		};
	}

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<View>
						<Text>TODO: ENTER YOUR USERNAME & PASSWORD</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default SignInScreen;
