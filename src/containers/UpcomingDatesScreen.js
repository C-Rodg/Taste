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

class UpcomingDatesScreen extends Component {
	static navigationOptions = {
		title: 'Upcoming Dates'
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
						<Text>Upcoming dates and stuff..</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default UpcomingDatesScreen;

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
