// Libraries
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// Styles
import { StyledGhostTouchable, StyledGhostText } from './styles';

const GhostButton = ({ text, isBlock, onTap }) => {
	return (
		<StyledGhostTouchable onPress={onTap} isBlock={isBlock}>
			<StyledGhostText>{text}</StyledGhostText>
		</StyledGhostTouchable>
	);
};

export default GhostButton;
