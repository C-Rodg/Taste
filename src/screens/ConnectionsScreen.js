// Libraries
import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
	StatusBar
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { UPCOMING_DATES_SCREEN, MESSAGING_SCREEN } from '../navigation/screens';

class ConnectionsScreen extends Component {
	componentDidMount() {
		// Listen for navigation button presses
		this.navigationEventListener = Navigation.events().bindComponent(this);
	}
	componentWillUnmount() {
		// Remove event listener
		if (this.navigationEventListener) {
			this.navigationEventListener.remove();
		}
	}

	// EVENT - navigation button pressed
	navigationButtonPressed({ buttonId }) {
		if (buttonId === 'button-upcoming') {
			Navigation.showModal({
				stack: {
					children: [
						{
							component: {
								name: UPCOMING_DATES_SCREEN
							}
						}
					]
				}
			});
		}
	}

	// EVENT - go to message screen
	goToMessageScreen = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: MESSAGING_SCREEN
			}
		});
	};

	render() {
		return (
			<SafeAreaView>
				<View>
					<Text>Connections Screen</Text>

					<Button title="Sample Message" onPress={this.goToMessageScreen} />
				</View>
			</SafeAreaView>
		);
	}
}

export default ConnectionsScreen;
