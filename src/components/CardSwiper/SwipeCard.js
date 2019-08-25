// Libraries
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Icons
// silverware-fork-knife, map-marker, school, information
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// ios-link
import IonIcon from 'react-native-vector-icons/Ionicons';

// TODO: Onclick open card up

function SwipeCard({ id, name, age, title, foods }) {
	return (
		<View style={styles.card}>
			<View>
				<View style={{ height: 200 }}>
					<Text>Image here</Text>
				</View>
				<View>
					<Text>{name}</Text>
					<Text>{age}</Text>
					<Text>{title}</Text>
					<Text>{foods.join(', ')}</Text>
				</View>
			</View>
		</View>
	);
}

export default SwipeCard;

// Styles
const styles = StyleSheet.create({
	card: {
		flex: 1,
		borderRadius: 10,
		flexWrap: 'nowrap',
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.13,
		shadowRadius: 1.7,
		elevation: 3,
		padding: 10,
	},
});
