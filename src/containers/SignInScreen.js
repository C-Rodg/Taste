// Libraries
import React, { Fragment, Component } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import styled from 'styled-components';

// Props
import FONTS from '../styles/fonts';
import COLORS from '../styles/colors';

class SignInScreen extends Component {
	handleLogin = () => {
		// TODO: Call facebook sdk
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
							onPress={() => this.props.navigation.navigate('App')}
						>
							<GetStartedTouchableText>Get Started</GetStartedTouchableText>
						</GetStartedTouchable>
					</ContentWrapperView>
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
