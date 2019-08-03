import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button
} from 'react-native';

import { goToHome } from '../navigation/navigation';

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

	// EVENT - do registration and then go home
	handleMainButtonPress = () => {
		goToHome();
	};

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<View>
						<Text>TODO: Enter your email & password and 'Sign Up'</Text>
						<Button title="Sign Up" onPress={this.handleMainButtonPress} />
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default SignUpScreen;
