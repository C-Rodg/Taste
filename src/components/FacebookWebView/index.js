import React, { Component } from 'react';
import {
	Modal,
	ActivityIndicator,
	Dimensions,
	SafeAreaView,
	TouchableOpacity,
	StyleSheet,
	Platform,
	Text,
	View,
} from 'react-native';
import { WebView } from 'react-native-webview';

var keyParent = 1;
class FacebookWebView extends Component {
	_errorsMessages = {
		whenPropsIsInvalid: 'Please provide missing required props correctly',
	};

	state = {
		url: {
			authLoginUrl: `https://www.facebook.com/v3.3/dialog/oauth?client_id=${this.props.clientId}&redirect_uri=${this.props.redirectUrl}&state=hi123what456&response_type=token`,
		},
		visible: true,
	};

	_onNavigationStateChange = event => {
		const { onLoginFailure, onLoginSuccess } = this.props;
		let getEvent = event;
		// Check for errors
		if (getEvent.title.includes('Error')) {
			console.log('ERROR FOR FB LOGIN');
			console.log(getEvent);
			this._openCloseModal(false, () => {
				onLoginFailure(this._errorsMessages.whenPropsIsInvalid);
				throw new Error(this._errorsMessages.whenPropsIsInvalid);
			});
		} else {
			if (getEvent.url.includes('login_success.html#access_token=')) {
				// Find the position of the token in the URL
				const tokenStartString = '#access_token=';
				const tokenStartPos =
					getEvent.url.indexOf(tokenStartString) + tokenStartString.length;
				const tokenEndPos = getEvent.url.indexOf('&', tokenStartPos);
				let token = '';
				if (~tokenEndPos) {
					token = getEvent.url.substring(tokenStartPos, tokenEndPos);
				} else {
					token = getEvent.url.substring(tokenStartPos);
				}

				// Save the access token
				this._setAccessToken(token);
				this._openCloseModal(false, () => {
					onLoginSuccess(token);
				});
			}
		}
	};

	_onLoad = () => {
		return 'Nothing to execute';
	};

	_Indicator = () => {
		return (
			<ActivityIndicator
				color="#3b5998"
				size="large"
				style={styles.indicator}
			/>
		);
	};

	_openCloseModal(status, what = null) {
		return this.setState({ visible: status }, what);
	}

	_injectJS = () => {
		return `
        document.getElementById('m_login_password').addEventListener('click', () =>  window.postMessage(window.scrollTo(0, 100)))
    `;
	};

	_commander = readyToInvoke => {
		if (readyToInvoke) {
			return (
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.visible}
					onRequestClose={() => this._openCloseModal(false)}
				>
					<View style={styles.webViewTop}></View>
					<WebView
						style={styles.webView}
						javaScriptEnabled
						startInLoadingState={true}
						source={{ uri: this.state.url.authLoginUrl }}
						onNavigationStateChange={this._onNavigationStateChange}
						injectedJavaScript={
							Platform.OS === 'android' ? this._injectJS() : ''
						}
						renderLoading={this._Indicator}
						onLoad={this._onLoad}
					/>
					<SafeAreaView style={styles.buttonContainer}>
						<TouchableOpacity onPress={() => this._openCloseModal(false)}>
							<SafeAreaView style={styles.closeButtonWithWrapper}>
								<Text style={styles.closeText}>Cancel</Text>
							</SafeAreaView>
						</TouchableOpacity>
					</SafeAreaView>
				</Modal>
			);
		}
	};

	_setAccessToken = token => (global.GET_ACCESS_TOKEN = token);

	render = () =>
		this.props.isInvoke ? this._commander(this.props.isInvoke) : null;
}

export const loginInWithPermissions = ({
	login = true,
	redirectUrl = 'https://facebook.com/connect/login_success.html',
	clientId = '',
	secretKey = '',
	onLoginSuccess = data => console.log(data),
	onLoginFailure = error => console.log(error),
}) => {
	const _CLIENT_VARS = [
		'REPLACE_WITH_YOUR_APP_ID',
		'REPLACE_WITH_YOUR_SECRET_KEY',
	];
	if (
		clientId &&
		secretKey &&
		clientId !== _CLIENT_VARS[0] &&
		secretKey !== _CLIENT_VARS[1]
	) {
		++keyParent;
		return (
			<FacebookWebView
				isInvoke={login}
				redirectUrl={redirectUrl}
				clientId={clientId}
				secretKey={secretKey}
				key={keyParent}
				onLoginSuccess={onLoginSuccess}
				onLoginFailure={onLoginFailure}
			/>
		);
	} else {
		const whenPropsIsMissing = 'Please provide missing required props';
		throw new Error(whenPropsIsMissing);
	}
};

export const getAccessToken = () =>
	global.GET_ACCESS_TOKEN
		? global.GET_ACCESS_TOKEN
		: { message: 'No access token found in store yet.', status: false };

export const logout = () => {
	if (global.GET_ACCESS_TOKEN) {
		global.GET_ACCESS_TOKEN = '';
		return { message: 'Successfully logout.', status: true };
	} else {
		return { message: 'Nothing to logout.', status: false };
	}
};

const styles = StyleSheet.create({
	webViewTop: {
		marginTop: 0,
		height: Platform.OS === 'ios' ? 35 : 0,
		backgroundColor: '#3b5997',
	},
	webView: {
		marginTop: 0,
	},
	indicator: {
		flex: 1,
		marginVertical: 30,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
	},
	buttonContainer: {
		marginVertical: 0.1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	closeButtonWithWrapper: {
		marginTop: 10,
		backgroundColor: '#4267b2',
		width: Dimensions.get('screen').width - 20,
		height: 50,
		borderWidth: 1,
		borderColor: '#4267b2',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 6,
	},
	closeText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default FacebookWebView;
