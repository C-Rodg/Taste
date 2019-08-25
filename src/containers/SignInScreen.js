// Libraries
import React, { Fragment, Component } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import styled from 'styled-components';
import { loginInWithPermissions } from '../components/FacebookWebView';
import axios from 'axios';
import { connect } from 'react-redux';

// Actions
import { saveJwtToken } from '../redux/actions/settings';

// Secrets
import { SECRETS } from '../secrets';

// Props
import FONTS from '../styles/fonts';
import COLORS from '../styles/colors';

class SignInScreen extends Component {
	state = {
		loggingOn: false,
	};

	// Handle login success from facebook
	handleLoginSuccess = async userAccessToken => {
		// Login with our service
		try {
			const { data } = await axios.post(
				'http://localhost:8086/api/v1/auth/user',
				{
					userAccessToken,
					partnerType: 'Fb',
				},
				{ headers: { 'Content-Type': 'application/json' } }
			);
			console.log(data);
			if (data.error) {
				throw new Error(resp.errorMessage);
			}

			if (data.newUser) {
				console.log('New User');
				this.props.navigation.navigate('StartNewUser', {
					jwtToken: data.jwtToken,
				});
			} else {
				console.log('Existing User');
				this.props.saveJwtToken(data.jwtToken);
				this.props.navigation.navigate('App');
			}
		} catch (err) {
			// TODO: SHOW SOME ERROR
			console.log('ERROR LOGGING IN WITH OUR SERVICE');
			console.log(err);
		}
	};

	// Handle login error
	handleLoginError = err => {
		// TODO: SHOW SOME ERROR
		console.log('ERROR LOGGING IN WITH FACEBOOK SERVICE');
		console.log(err);
	};

	// Render the login component
	renderLogin = () => {
		const { loggingOn } = this.state;
		if (loggingOn) {
			return loginInWithPermissions({
				runNow: true,
				redirectUrl: 'https://facebook.com/connect/login_success.html',
				clientId: SECRETS.facebook_clientId,
				secretKey: SECRETS.facebook_secretKey,
				onLoginSuccess: this.handleLoginSuccess,
				onLoginFailure: this.handleLoginError,
			});
		}
	};

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="light-content" />

				<SafeAreaView style={{ flex: 1 }}>
					<ContentWrapperView style={{ flex: 1 }}>
						<LogoView />
						<LogoTextWrapperView>
							<TitleText>Taste</TitleText>
							<SubtitleText>The dating app for foodies.</SubtitleText>
						</LogoTextWrapperView>
						<View>
							<TaglineText>What's your Taste?</TaglineText>
						</View>
					</ContentWrapperView>

					<ContentWrapperView>
						<GetStartedTouchable
							onPress={() => this.setState({ loggingOn: true })}
						>
							<GetStartedTouchableText>Get Started</GetStartedTouchableText>
						</GetStartedTouchable>
					</ContentWrapperView>
					{this.renderLogin()}
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
)(SignInScreen);

// Styles
const ContentWrapperView = styled.View`
	margin: 20px;
	justify-content: center;
	align-items: center;
`;

// Temporary logo
const LogoView = styled.View`
	width: 182px;
	height: 182px;
	border-radius: 74;
	background-color: ${COLORS.pink};
`;

const LogoTextWrapperView = styled.View`
	margin: 30px 0;
`;

const TitleText = styled.Text`
	text-align: center;
	font-family: ${FONTS.family.medium};
	font-size: ${FONTS.sizes.larger};
	font-weight: ${FONTS.weights.medium};
`;

const SubtitleText = styled.Text`
	text-align: center;
	font-family: ${FONTS.family.medium};
	font-size: ${FONTS.sizes.regular};
	font-weight: ${FONTS.weights.regular};
	margin: 8px 0;
`;

const TaglineText = styled.Text`
	text-align: center;
	font-family: ${FONTS.family.medium};
	font-size: ${FONTS.sizes.regular};
	font-weight: ${FONTS.weights.medium};
`;

const GetStartedTouchable = styled.TouchableOpacity`
	width: 100%;
	border: 1px solid ${COLORS.pink};
	padding-top: 20;
	padding-bottom: 20;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;
const GetStartedTouchableText = styled.Text`
	font-size: 20;
	color: ${COLORS.pink};
	font-family: ${FONTS.family.medium};
	font-weight: ${FONTS.weights.medium};
`;
