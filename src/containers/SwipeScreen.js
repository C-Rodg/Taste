// Libraries
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
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

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

// Screens
import { FILTER_SIDE_MENU } from '../navigation/screens';

// Components
import CardSwiper from '../components/CardSwiper';

// Actions
import { getUserData } from '../redux/actions/userActions';

// Styles
import colors from '../styles/colors';

class SwipeScreen extends Component {
	componentDidMount() {
		// Listen for navigation button presses
		this.navigationEventListener = Navigation.events().bindComponent(this);

		// TESTING
		this.props.getUserData();
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
				<SafeAreaView style={{ flex: 1, backgroundColor: colors.GRAY }}>
					{/* <ScrollView
						contentInsetAdjustmentBehavior="automatic"
						style={styles.scrollView}
					> */}
					<View style={styles.body}>
						<CardSwiper />
					</View>
					{/* </ScrollView> */}
				</SafeAreaView>
			</Fragment>
		);
	}
}

// TODO: figure out how to handle scrollable content

const styles = StyleSheet.create({
	scrollView: {
		//backgroundColor: 'blue'
	},
	body: {
		//backgroundColor: 'red'
	}
});

const mapStateToProps = state => {
	const {
		user: { currentUser }
	} = state;
	return {
		currentUser
	};
};

const mapDispatchToProps = dispatch => ({
	getUserData: () => dispatch(getUserData())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SwipeScreen);

// OLD CONTENT
{
	/* <View>
<Text style={{ fontFamily: 'Fira Sans' }}>
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
<Text style={{ fontFamily: 'Fira Sans', fontWeight: '300' }}>
	Just another piece of text
</Text>
<Text style={{ fontFamily: 'Fira Sans', fontWeight: '500' }}>
	Just another piece of text
</Text>

<Text style={{ fontFamily: 'Fira Sans', fontWeight: '700' }}>
	Just another piece of text
</Text>

<Text style={{ fontFamily: 'Fira Sans', fontWeight: '500' }}>
	{this.props.currentUser && this.props.currentUser.firstName}
</Text>
</View> */
}
