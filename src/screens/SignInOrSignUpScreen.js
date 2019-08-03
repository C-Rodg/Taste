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

class SignInOrSignUpScreen extends Component {
	navigateTo = name => {
		Navigation.push(this.props.componentId, {
			component: {
				name: `taste.${name}`
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
							onPress={() => this.navigateTo('SignInScreen')}
						/>
						<Button
							title="Register Now"
							onPress={() => this.navigateTo('SignUpScreen')}
						/>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default SignInOrSignUpScreen;
