// Libraries
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
	StatusBar
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

import COLORS from '../styles/colors';

class SwipeScreen extends Component {
	componentDidMount() {}

	render() {
		console.log(this.props.currentUser);
		return (
			<Fragment>
				<StatusBar barStyle="light-content" />
				<SafeAreaView>
					<View style={styles.container}>
						<Text style={{ fontFamily: 'FiraSans-Bold', fontSize: 34 }}>
							Swiper screen.
						</Text>

						<Text>
							<MaterialCommunityIcon
								name="silverware-fork-knife"
								size={30}
								color={COLORS.gray}
							/>
							<IonIcon name="ios-link" size={30} color={COLORS.gray} />
							<MaterialCommunityIcon
								name="map-marker"
								size={30}
								color={COLORS.gray}
							/>
							<MaterialCommunityIcon
								name="school"
								size={30}
								color={COLORS.gray}
							/>
							<MaterialCommunityIcon
								name="information"
								size={30}
								color={COLORS.gray}
							/>
						</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	const { currentUser } = state.user;
	return {
		currentUser
	};
};

export default connect(mapStateToProps)(SwipeScreen);

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
