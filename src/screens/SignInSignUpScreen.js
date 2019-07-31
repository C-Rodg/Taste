import React, { Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

const SignInSignUpScreen = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<View>
					<Text>Sign in or sign up</Text>
				</View>
			</SafeAreaView>
		</Fragment>
	);
};

export default SignInSignUpScreen;
