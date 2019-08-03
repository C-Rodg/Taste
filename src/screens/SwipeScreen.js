// Libraries
import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class SwipeScreen extends Component {
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
		if (buttonId === 'button-filters') {
			// Show the filters menu
			Navigation.mergeOptions('FilterSideMenu', {
				sideMenu: {
					right: {
						visible: true
					}
				}
			});
		}
	}

	render() {
		return (
			<Fragment>
				<SafeAreaView>
					<View>
						<Text>Swiper Screen</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default SwipeScreen;
