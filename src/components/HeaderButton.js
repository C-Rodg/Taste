// Libraries
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// Styles
import COLORS from '../styles/colors';
import FONTS from '../styles/fonts';

function HeaderButton({ onHeaderButtonPress, children }) {
	return (
		<TouchableOpacity onPress={onHeaderButtonPress}>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	);
}

export default HeaderButton;

const styles = StyleSheet.create({
	text: {
		color: COLORS.pink,
		fontSize: 18,
		fontFamily: FONTS.family.medium,
		fontWeight: FONTS.weights.medium
	}
});
