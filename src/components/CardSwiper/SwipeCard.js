// Libraries
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
} from 'react-native';

// Props
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';

// Icons
// silverware-fork-knife, map-marker, school, information
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// ios-link
import IonIcon from 'react-native-vector-icons/Ionicons';

class SwipeCard extends Component {
	state = {
		isOpen: false,
	};

	// Toggle Card being open
	toggleOpen = () => {
		this.setState(prevState => {
			return {
				isOpen: !prevState.isOpen,
			};
		});
	};

	render() {
		const { id, name, age, title, foods, imageURI } = this.props;
		return (
			<TouchableOpacity
				style={styles.card}
				activeOpacity={1}
				onPress={this.toggleOpen}
			>
				<Image
					style={{ width: null, height: 300 }}
					source={{
						uri: imageURI,
						headers: {
							Pragma: 'no-cache',
						},
						cache: 'reload',
					}}
				/>

				<View>
					<Text style={styles.header}>
						{name}, {age}
					</Text>
					<Text style={styles.title}>{title}</Text>
					<View style={styles.spacer}></View>
					<Text>{foods.join(', ')}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

export default SwipeCard;

// Styles
const styles = StyleSheet.create({
	card: {
		flex: 1,
		flexDirection: 'column',
		borderRadius: 6,
		flexWrap: 'nowrap',
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.18,
		shadowRadius: 1.7,
		elevation: 3,
		padding: 15,
		minHeight: 420,
	},
	spacer: {
		backgroundColor: COLORS.gray,
		borderRadius: 2,
		width: '100%',
		height: 2,
	},
	header: {
		marginTop: 10,
		color: COLORS.black,
		fontSize: FONTS.sizes.large,
		fontFamily: FONTS.family.medium,
		fontWeight: FONTS.weights.medium,
	},
	title: {
		color: COLORS.gray,
		fontSize: FONTS.sizes.regular,
		fontFamily: FONTS.family.medium,
		fontWeight: FONTS.weights.medium,
	},
});
