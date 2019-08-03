import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

class SignUpScreen extends Component {
	static get options() {
		return {
			topBar: {
				title: {
					text: 'Register Now'
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
						<Text>TODO: Enter your email & password and 'Sign Up'</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default SignUpScreen;
