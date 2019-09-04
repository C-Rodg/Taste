// Libraries
import React from 'react';
import { Text } from 'react-native';

// Icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

// Props
import COLORS from '../../styles/colors';

// Styles
import {
	StyledNormalText,
	StyledIconSidebar,
	StyledInfoSectionView,
} from './styles';

// Icon mapping
const iconMap = {
	foods: (
		<MaterialCommunityIcon
			name="silverware-fork-knife"
			size={18}
			color={COLORS.gray}
		/>
	),
	location: (
		<MaterialCommunityIcon name="map-marker" size={18} color={COLORS.gray} />
	),
	school: <MaterialCommunityIcon name="school" size={18} color={COLORS.gray} />,
	lookingFor: <IonIcon name="ios-link" size={18} color={COLORS.gray} />,
	bio: (
		<MaterialCommunityIcon name="information" size={18} color={COLORS.gray} />
	),
};

function InfoSection({ propName, value, limitLines }) {
	const isArray = Array.isArray(value);
	if (!value || (isArray && value.length === 0)) {
		return null;
	}
	const transformedValue = isArray
		? transformListToMatchingTextList(value)
		: value;
	return (
		<StyledInfoSectionView>
			<StyledIconSidebar>{iconMap[propName]}</StyledIconSidebar>
			<StyledNormalText numberOfLines={limitLines}>
				{transformedValue}
			</StyledNormalText>
		</StyledInfoSectionView>
	);
}

// Transform list of objects to matching text list
function transformListToMatchingTextList(userRowArray) {
	const textList = userRowArray
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
}

export default InfoSection;
