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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { FILTER_SIDE_MENU } from '../navigation/screens';

// Styles
import colors from '../styles/colors';

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
			Navigation.mergeOptions(FILTER_SIDE_MENU, {
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
						<Text>
							Swiper Screen
							<Icon
								name="silverware-fork-knife"
								size={30}
								color={colors.GRAY}
							/>
							<IonIcon name="ios-link" size={30} color={colors.GRAY} />
							<Icon name="map-marker" size={30} color={colors.GRAY} />
							<Icon name="school" size={30} color={colors.GRAY} />
							<Icon name="information" size={30} color={colors.GRAY} />
						</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default SwipeScreen;
