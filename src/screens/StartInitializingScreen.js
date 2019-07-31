import React, { Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

const StartInitializingScreen = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<View>
					<Text>Start initializing and determine app state</Text>
				</View>
			</SafeAreaView>
		</Fragment>
	);
};

export default StartInitializingScreen;
