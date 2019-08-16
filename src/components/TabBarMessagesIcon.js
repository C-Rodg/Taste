// Libraries
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

// Styles
import COLORS from '../styles/colors';

function TabBarMessagesIcon({ tintColor, newMessages, newConnections }) {
	return (
		<View>
			<MaterialCommunityIcon name="forum" size={32} color={tintColor} />
			{(newMessages || newConnections) && <View style={styles.badge} />}
		</View>
	);
}

const mapStateToProps = state => {
	const {
		connections: { newMessages, newConnections }
	} = state;
	return {
		newMessages,
		newConnections
	};
};

export default connect(mapStateToProps)(TabBarMessagesIcon);

const styles = StyleSheet.create({
	badge: {
		position: 'absolute',
		right: -1,
		top: 0,
		backgroundColor: COLORS.pink,
		borderRadius: 5,
		width: 10,
		height: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
