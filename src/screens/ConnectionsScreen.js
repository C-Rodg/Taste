import React, { Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

const ConnectionsScreen = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<View>
					<Text>Connections Screen</Text>
				</View>
			</SafeAreaView>
		</Fragment>
	);
};

export default ConnectionsScreen;
