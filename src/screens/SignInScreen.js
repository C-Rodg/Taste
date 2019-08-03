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

	// EVENT - authenticate and then go home
	handleMainButtonPress = () => {
		goToHome();
	};

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<View>
						<Text>TODO: ENTER YOUR USERNAME & PASSWORD</Text>
						<Button title="Continue" onPress={this.handleMainButtonPress} />
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default SignInScreen;
