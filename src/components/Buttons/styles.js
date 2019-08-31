// Libraries
import styled from 'styled-components';

// Props
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';

const StyledGhostTouchable = styled.TouchableOpacity`
	width: ${props => (props.isBlock ? '100%' : 'auto')};
	align-self: center;
	display: flex;
	border: 1px solid ${COLORS.pink};
	padding-top: ${props => (props.isBlock ? 18 : 13)};
	padding-bottom: ${props => (props.isBlock ? 18 : 13)};
	padding-left: 25;
	padding-right: 25;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;
const StyledGhostText = styled.Text`
	font-size: ${FONTS.sizes.medium};
	color: ${COLORS.pink};
	font-family: ${FONTS.family.medium};
	font-weight: ${FONTS.weights.medium};
`;

export { StyledGhostTouchable, StyledGhostText };
