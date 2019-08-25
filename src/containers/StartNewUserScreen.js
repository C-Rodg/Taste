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
import { connect } from 'react-redux';

// Components
import { HeaderButton } from '../components/NavigationItems';

// Actions
import { saveJwtToken } from '../redux/actions/settings';

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
		// TODO: Validate user

		// TODO: Set user

		// Set JWT Token
		const jwtToken = this.props.navigation.getParam('jwtToken');
		this.props.saveJwtToken(jwtToken);

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

const mapDispatchToProps = dispatch => ({
	saveJwtToken: token => dispatch(saveJwtToken(token)),
});

export default connect(
	null,
	mapDispatchToProps
)(StartNewUserScreen);

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
