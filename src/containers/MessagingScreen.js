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

class MessagingScreen extends Component {
	static navigationOptions = {
		title: 'TODO: PERSONS NAME'
	};
	componentDidMount() {
		// TODO: navigate to home or auth routes
	}

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<View style={styles.container}>
						<Text>Messaging stuff..</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default MessagingScreen;

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
