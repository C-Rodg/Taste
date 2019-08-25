// Libraries
import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
	StatusBar,
} from 'react-native';

// Components
import { HeaderButton } from '../components/NavigationItems';

class ProfileScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Profile',
			headerRight: (
				<HeaderButton onHeaderButtonPress={() => navigation.navigate('Edit')}>
					Edit
				</HeaderButton>
			),
			headerRightContainerStyle: {
				paddingRight: 15,
			},
		};
	};
	componentDidMount() {
		// TODO: navigate to home or auth routes
	}

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="light-content" />
				<SafeAreaView>
					<View style={styles.container}>
						<Text>Profile screen</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
