// Libraries
import React, { Fragment, Component } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import styled from 'styled-components';
import { loginInWithPermissions } from '../components/FacebookWebView';
import axios from 'axios';

// Secrets
import { SECRETS } from '../secrets';

// Props
import FONTS from '../styles/fonts';
import COLORS from '../styles/colors';

class SignInScreen extends Component {
	state = {
		login: false,
	};

	// Handle login success from facebook
	handleLoginSuccess = data => {
		console.log(data);
		const { access_token } = data;
		console.log(access_token);
		// Login with our service
		axios
			.post(
				'http://localhost:8086/api/v1/auth/user',
				{
					accessToken: access_token,
					partnerType: 'Fb',
				},
				{ headers: { 'Content-Type': 'application/json' } }
			)
			.then(({ data, ...resp }) => {
				console.log(resp);
				console.log(data);
				if (data.error) {
					throw new Error(resp.errorMessage);
				}
				console.log(data.jwtToken);
				// TODO: set state with what? accessToken? jwt? profile info?
				if (data.newUser) {
					// TODO: GO TO NEW PROFILE SETUP
					console.log('New User');
				} else {
					console.log('Existing User');
					this.props.navigation.navigate('App');
				}
			})
			.catch(err => {
				console.log('ERROR LOGGING IN WITH OUR SERVICE');
				console.log(err);
			});
	};

	// Handle login error
	handleLoginError = err => {
		console.log('ERROR LOGGING IN WITH FACEBOOK SERVICE');
		console.log(err);
	};

	// Render the login component
	renderLogin = () => {
		const { login } = this.state;
		if (login) {
			return loginInWithPermissions({
				runNow: true,
				redirectUrl: 'https://facebook.com/connect/login_success.html',
				getMyInformationsFields: [
					'id,first_name,last_name,name,email,picture,birthday,gender,location',
				],
				clientId: SECRETS.facebook_clientId,
				secretKey: SECRETS.facebook_secretKey,
				onLoginSuccess: this.handleLoginSuccess,
				onLoginFailure: this.handleLoginError,
			});
		}
		// eventually call: this.props.navigation.navigate('App')
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
						<GetStartedTouchable onPress={() => this.setState({ login: true })}>
							<GetStartedTouchableText>Get Started</GetStartedTouchableText>
						</GetStartedTouchable>
					</ContentWrapperView>
					{this.renderLogin()}
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default SignInScreen;

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
