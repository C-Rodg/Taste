// Libraries
import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

class InitializingScreen extends Component {
	componentDidMount() {
		// TODO: navigate to home or auth routes
		const hasToken = true;
		if (hasToken) {
			this.props.navigation.navigate('App');
		} else {
			this.props.navigation.navigate('Auth');
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

export default InitializingScreen;

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
