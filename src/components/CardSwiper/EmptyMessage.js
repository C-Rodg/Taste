import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import { GhostButton } from '../Buttons';

// Props
import FONTS from '../../styles/fonts';

function EmptyMessage({ onGetMoreCards }) {
	return (
		<View>
			<Text style={styles.noMatchText}>
				Looks like we're all out of matches!
			</Text>
			<GhostButton text="Retry" onTap={onGetMoreCards} />
		</View>
	);
}

const styles = StyleSheet.create({
	noMatchText: {
		textAlign: 'center',
		fontSize: FONTS.sizes.regular,
		fontWeight: FONTS.weights.medium,
		fontFamily: FONTS.family.medium,
		marginBottom: 15,
	},
});

export default EmptyMessage;
