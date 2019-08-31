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

// Components
import InfoSection from './InfoSection';

// Styles
import {
	StyledNormalText,
	StyledNameHeader,
	StyledSectionSpacer,
} from './styles';

class SwipeCard extends Component {
	testMethod = ev => {
		console.log(ev.nativeEvent.layout.height);
	};

	render() {
		const {
			id,
			name,
			age,
			title,
			location,
			school,
			bio,
			foods,
			lookingFor,
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
					<StyledNameHeader>
						{name}, {age}
					</StyledNameHeader>
					<StyledNormalText>{title}</StyledNormalText>
					<StyledSectionSpacer></StyledSectionSpacer>
					<InfoSection propName="foods" value={foods} />
					<InfoSection propName="location" value={location} />
					<InfoSection propName="school" value={school} />
					<InfoSection propName="lookingFor" value={lookingFor} />
					<InfoSection propName="bio" value={bio} />
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
});
