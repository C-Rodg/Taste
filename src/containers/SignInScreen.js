// Libraries
import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button,
	ImageBackground,
	Image,
} from 'react-native';
import styled from 'styled-components';

// Images
const backgroundImage = require('../assets/coffee_1_bw.png');

// Props
import FONTS from '../styles/fonts';
import COLORS from '../styles/colors';

class SignInScreen extends Component {
	componentDidMount() {
		// TODO: navigate to home or auth routes
	}

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="light-content" />

				<BackgroundImageView
					source={backgroundImage}
					resizeMode="cover"
					imageStyle={{ width: '100%' }}
				>
					<SafeAreaView style={{ flex: 1 }}>
						<ContentWrapperView>
							<LogoView />
							<TagLineText>What's your Taste?</TagLineText>
							<GetStartedTouchable
								onPress={() => this.props.navigation.navigate('App')}
							>
								<GetStartedTouchableText>Get Started</GetStartedTouchableText>
							</GetStartedTouchable>
						</ContentWrapperView>
					</SafeAreaView>
				</BackgroundImageView>
			</Fragment>
		);
	}
}

export default SignInScreen;

// Styles
const BackgroundImageView = styled.ImageBackground`
	width: 100%;
	height: null;
	flex: 1;
`;

const ContentWrapperView = styled.View`
	margin: 20px;
	justify-content: center;
	align-items: center;
`;

// Temporary logo
const LogoView = styled.View`
	width: 76px;
	height: 76px;
	border-radius: 38;
	background-color: ${COLORS.pink};
`;

const TagLineText = styled.Text`
	font-family: ${FONTS.family.medium};
	font-size: ${FONTS.sizes.large};
	font-weight: ${FONTS.weights.medium};
	margin: 30px 0 20px 0;
`;

const GetStartedTouchable = styled.TouchableOpacity`
	width: 100%;
	background-color: ${COLORS.pink};
	padding-top: 20;
	padding-bottom: 20;
	justify-content: center;
	align-items: center;
	border-radius: 40px;
`;
const GetStartedTouchableText = styled.Text`
	font-size: 20;
	color: #fff;
	font-family: ${FONTS.family.medium};
	font-weight: ${FONTS.weights.medium};
`;
