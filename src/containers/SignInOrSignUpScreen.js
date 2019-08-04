import React, { Fragment, Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button
} from 'react-native';

import { SIGNUP_SCREEN, SIGNIN_SCREEN } from '../navigation/screens';

class SignInOrSignUpScreen extends Component {
	// Navigate to the SignInScreen or the SignUpScreen
	navigateTo = name => {
		Navigation.push(this.props.componentId, {
			component: {
				name
			}
		});
	};

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<View>
						<Text>Please choose if you want to sign in or sign up:</Text>
						<Text>
							Alternative idea is just have email/password box here and then
							have service decide whether to login or register
						</Text>
						<Button
							title="Sign In"
							onPress={() => this.navigateTo(SIGNIN_SCREEN)}
						/>
						<Button
							title="Register Now"
							onPress={() => this.navigateTo(SIGNUP_SCREEN)}
						/>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default SignInOrSignUpScreen;
