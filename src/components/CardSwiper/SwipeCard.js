// Libraries
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	Animated,
	TouchableOpacity,
} from 'react-native';

// Props
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';

// Icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

class SwipeCard extends Component {
	testMethod = ev => {
		console.log(ev.nativeEvent.layout.height);
	};

	// Convert our matching list into text items with icon
	renderMatchingText = userRowName => {
		const list = this.props[userRowName];
		const textList = list
			.map(item => {
				if (item.isMatch) {
					return (
						<Text key={item.value} style={{ color: COLORS.pink }}>
							{item.value}
						</Text>
					);
				}
				return <Text key={item.value}>{item.value}</Text>;
			})
			.reduce((prev, curr) => [prev, ', ', curr]);
		return <Text>{textList}</Text>;
	};

	render() {
		const {
			id,
			name,
			age,
			title,
			foods,
			location,
			school,
			lookingFor,
			bio,
			imageURIs,
			cardIsOpen,
			onToggleCardOpen,
		} = this.props;
		return (
			<TouchableOpacity
				style={styles.card}
				activeOpacity={1}
				onPress={onToggleCardOpen}
			>
				<Image
					style={{ width: null, height: 300 }}
					source={{
						uri: imageURIs[0],
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
					<Text style={styles.textNormal}>{title}</Text>
					<View style={styles.spacer}></View>
					<View style={{ display: 'flex', flexDirection: 'row', marginTop: 8 }}>
						<Text style={{ marginRight: 8 }}>
							<MaterialCommunityIcon
								name="silverware-fork-knife"
								size={18}
								color={COLORS.gray}
							/>
						</Text>
						<Text style={[styles.textNormal, { marginTop: -2 }]}>
							{this.renderMatchingText('foods')}
						</Text>
					</View>
					<View style={{ display: 'flex', flexDirection: 'row', marginTop: 8 }}>
						<Text style={{ marginRight: 8 }}>
							<MaterialCommunityIcon
								name="map-marker"
								size={18}
								color={COLORS.gray}
							/>
						</Text>
						<Text style={[styles.textNormal, { marginTop: -2 }]}>
							{location}
						</Text>
					</View>
					<View style={{ display: 'flex', flexDirection: 'row', marginTop: 8 }}>
						<Text style={{ marginRight: 8 }}>
							<MaterialCommunityIcon
								name="school"
								size={18}
								color={COLORS.gray}
							/>
						</Text>
						<Text style={[styles.textNormal, { marginTop: -2 }]}>{school}</Text>
					</View>
					<View style={{ display: 'flex', flexDirection: 'row', marginTop: 8 }}>
						<Text style={{ marginRight: 8 }}>
							<IonIcon name="ios-link" size={18} color={COLORS.gray} />
						</Text>
						<Text style={[styles.textNormal, { marginTop: -2 }]}>
							{this.renderMatchingText('lookingFor')}
						</Text>
					</View>
					<View style={{ display: 'flex', flexDirection: 'row', marginTop: 8 }}>
						<Text style={{ marginRight: 8 }}>
							<MaterialCommunityIcon
								name="information"
								size={18}
								color={COLORS.gray}
							/>
						</Text>
						<Text style={[styles.textNormal, { marginTop: -2 }]}>{bio}</Text>
					</View>

					{/* <View>
						<Text>
							One, <Text>Two, </Text>
							<Text>Three</Text>
						</Text>
					</View>
					<View onLayout={this.testMethod}>
						<Text>Hidden things here...</Text>
					</View> */}
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
		minHeight: 600,
	},
	spacer: {
		backgroundColor: COLORS.gray,
		borderRadius: 2,
		width: '100%',
		height: 2,
		marginTop: 3,
	},
	header: {
		marginTop: 10,
		color: COLORS.black,
		fontSize: FONTS.sizes.large,
		fontFamily: FONTS.family.medium,
		fontWeight: FONTS.weights.medium,
	},
	textNormal: {
		color: COLORS.gray,
		fontSize: FONTS.sizes.regular,
		fontFamily: FONTS.family.medium,
		fontWeight: FONTS.weights.medium,
	},
});
