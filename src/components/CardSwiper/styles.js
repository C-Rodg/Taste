// Libraries
import styled from 'styled-components';

// Props
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';

const StyledNameHeader = styled.Text`
	color: ${COLORS.black};
	margin-top: 10;
	margin-bottom: 4;
	color: ${COLORS.black};
	font-size: ${FONTS.sizes.large};
	font-family: ${FONTS.family.medium};
	font-weight: ${FONTS.weights.medium};
`;

const StyledNormalText = styled.Text`
	margin-top: -2;
	color: ${COLORS.gray};
	font-size: ${FONTS.sizes.regular};
	font-family: ${FONTS.family.medium};
	font-weight: ${FONTS.weights.medium};
`;

const StyledIconSidebar = styled.Text`
	margin-right: 8px;
`;

const StyledInfoSectionView = styled.View`
	display: flex;
	flex-direction: row;
	margin-top: 8;
`;

const StyledSectionSpacer = styled.View`
	background-color: ${COLORS.gray};
	border-radius: 2;
	width: 100%;
	height: 2;
	margin-top: 5;
	margin-bottom: 1;
`;

export {
	StyledNormalText,
	StyledIconSidebar,
	StyledInfoSectionView,
	StyledNameHeader,
	StyledSectionSpacer,
};
