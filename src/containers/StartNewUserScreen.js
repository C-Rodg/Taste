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

class StartNewUserScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Welcome',
			headerRight: (
				<HeaderButton
					onHeaderButtonPress={navigation.getParam('validateNewUser')}
				>
					Done
				</HeaderButton>
			),
			headerRightContainerStyle: {
				paddingRight: 15,
			},
		};
	};

	componentDidMount() {
		// Setup Done header button
		const { navigation } = this.props;
		navigation.setParams({ validateNewUser: this._validateNewUser });
	}

	_validateNewUser = () => {
		// TODO: VALIDATE USER HAS COMPLETED FIELDS
		// TODO: SET USER & SAVE JWT TOKEN
		console.log('VALIDATING USER HERE');
		const jwtToken = this.props.navigation.getParam('jwtToken');
		console.log(jwtToken);

		// If all is good, then navigate to App
		this.props.navigation.navigate('App');
	};

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="light-content" />
				<SafeAreaView>
					<View style={styles.container}>
						<Text>Start New User screen</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default StartNewUserScreen;

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
