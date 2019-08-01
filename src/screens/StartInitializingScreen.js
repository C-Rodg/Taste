import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	AsyncStorage
} from 'react-native';

import { goToAuth, goToHome } from './navigation';
import { USER_KEY } from '../config/config';

class StartInitializingScreen extends Component {
	async componentDidMount() {
		try {
			const user = await AsyncStorage.getItem(USER_KEY);
			console.log('user: ', user);
			if (user) {
				goToHome();
			} else {
				goToAuth();
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
