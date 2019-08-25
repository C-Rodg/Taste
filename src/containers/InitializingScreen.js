// Libraries
import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

// Actions
import { setJwtToken } from '../redux/actions/settings';

// Config
import { JWT_TOKEN_KEY } from '../config/config';

class InitializingScreen extends Component {
	async componentDidMount() {
		// Determine if user is logged in or not
		try {
			const jwtToken = await AsyncStorage.getItem(JWT_TOKEN_KEY);
			if (jwtToken) {
				this.props.setJwtToken(jwtToken);
				this.props.navigation.navigate('App');
			} else {
				this.props.navigation.navigate('Auth');
			}
		} catch (err) {
			console.log(err);
			this.props.navigation.navigate('Auth');
		}
	}

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="light-content" />
				<SafeAreaView>
					<View style={styles.container}>
						<Text>TODO: LOGO IMAGE</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setJwtToken: token => dispatch(setJwtToken(token)),
});

export default connect(
	null,
	mapDispatchToProps
)(InitializingScreen);

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
