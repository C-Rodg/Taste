import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { goToAuth, goToHome } from '../navigation/navigation';
import { USER_KEY } from '../config/config';

class StartInitializingScreen extends Component {
	async componentDidMount() {
		try {
			const user = await AsyncStorage.getItem(USER_KEY);
			console.log('user: ', user);
			if (user) {
				goToHome();
			} else {
				//goToAuth();
				// TESTING
				goToHome();
			}
		} catch (err) {
			console.log('error:', err);
			goToAuth();
		}
	}

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<View style={styles.container}>
						<Text>Starting to initialize...</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default StartInitializingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
