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

class FiltersScreen extends Component {
	componentDidMount() {
		// TODO: navigate to home or auth routes
	}

	render() {
		return (
			<Fragment>
				<SafeAreaView>
					<View style={styles.container}>
						<Text>Filters screen stuff</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default FiltersScreen;

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
