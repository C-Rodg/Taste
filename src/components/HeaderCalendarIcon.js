// Libraries
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

// Styles
import COLORS from '../styles/colors';

function HeaderCalendarIcon({ navigation, upcomingDates }) {
	return (
		<TouchableOpacity onPress={() => navigation.navigate('UpcomingDates')}>
			<MaterialCommunityIcon color={COLORS.black} size={32} name="calendar" />
			{upcomingDates.length > 0 ? <View style={styles.badge} /> : null}
		</TouchableOpacity>
	);
}

const mapStateToProps = state => {
	const {
		dates: { upcomingDates }
	} = state;
	return {
		upcomingDates
	};
};

export default connect(mapStateToProps)(HeaderCalendarIcon);

const styles = StyleSheet.create({
	badge: {
		position: 'absolute',
		right: 1,
		top: 4,
		backgroundColor: COLORS.pink,
		borderRadius: 5,
		width: 10,
		height: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
