import React, { Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

const SwipeScreen = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<View>
					<Text>Swiper Screen</Text>
				</View>
			</SafeAreaView>
		</Fragment>
	);
};

export default SwipeScreen;
