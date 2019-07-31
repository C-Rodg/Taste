import React, { Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

const ProfileScreen = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<View>
					<Text>Profile Screen</Text>
				</View>
			</SafeAreaView>
		</Fragment>
	);
};

export default ProfileScreen;
