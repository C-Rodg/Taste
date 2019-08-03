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
	// static options(passProps) {
	// 	return {
	// 		topBar: {
	// 			leftButtons: [],
	// 			rightButtons: [
	// 				{
	// 					id: 'buttonOne',
	// 					//icon: require('icon.png')
	// 					text: 'Filters'
	// 				}
	// 			]
	// 		}
	// 	};
	// }
	testMethod() {
		Navigation.mergeOptions('FilterSideMenu', {
			sideMenu: {
				left: {
					visible: true
				}
			}
		});
	}
	render() {
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<View>
						<Text>Swiper Screen</Text>
						<Button title="open menu" onPress={this.testMethod} />
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default SwipeScreen;
