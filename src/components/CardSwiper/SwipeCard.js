// Libraries
import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native';

// Components
import InfoSection from './InfoSection';
import { SliderCarousel } from '../SliderCarousel/';

// Styles
import {
	StyledNormalText,
	StyledNameHeader,
	StyledSectionSpacer,
} from './styles';

// Props
import COLORS from '../../styles/colors';

class SwipeCard extends Component {
	state = {
		animation: new Animated.Value(0),
		topContentHeight: null,
		bottomContentHeight: null,
	};

	componentDidUpdate(prevProps) {
		if (this.props.isCurrent) {
			if (this.props.cardIsOpen !== prevProps.cardIsOpen) {
				this.toggleCardHeight();
			}
		}
	}

	// Set initial height for top content
	onTopCardContentLayout = ev => {
		this.setState({
			topContentHeight: ev.nativeEvent.layout.height,
		});
	};

	// Set initial height for bottom content
	onCardContentLayout = ev => {
		this.setState({
			bottomContentHeight: ev.nativeEvent.layout.height,
		});
	};

	// Transition the height on card toggle
	toggleCardHeight = () => {
		const { cardIsOpen } = this.props;
		const { topContentHeight, bottomContentHeight } = this.state;
		const openHeight = 300 + topContentHeight + bottomContentHeight + 34;
		const closedHeight = 300 + topContentHeight + 34;

		this.state.animation.setValue(cardIsOpen ? closedHeight : openHeight);
		Animated.spring(this.state.animation, {
			toValue: cardIsOpen ? openHeight : closedHeight,
		}).start();
	};

	// Get inital swipe card styles
	getSwipeCardStyles = () => {
		const cardStyles = {
			...styles.container,
		};

		const originalCardHeight = 300 + this.state.topContentHeight + 34;
		this.state.animation.setValue(originalCardHeight);

		return cardStyles;
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
			isCurrent,
		} = this.props;

		return (
			<Animated.View
				style={[this.getSwipeCardStyles(), { minHeight: this.state.animation }]}
			>
				<View style={styles.card}>
					<SliderCarousel
						images={imageURIs}
						dotColor={COLORS.pink}
						isEnabled={cardIsOpen}
						onImagePress={onToggleCardOpen}
					/>

					<TouchableOpacity onPress={onToggleCardOpen} activeOpacity={1}>
						<View onLayout={this.onTopCardContentLayout}>
							<StyledNameHeader>
								{name}, {age}
							</StyledNameHeader>
							<StyledNormalText>{title}</StyledNormalText>
							<StyledSectionSpacer></StyledSectionSpacer>
							<InfoSection propName="foods" value={foods} />
						</View>

						<View
							onLayout={this.onCardContentLayout}
							style={{ opacity: cardIsOpen ? 1 : 0 }}
						>
							<InfoSection propName="location" value={location} />
							<InfoSection propName="school" value={school} />
							<InfoSection propName="lookingFor" value={lookingFor} />
							<InfoSection propName="bio" value={bio} />
						</View>
					</TouchableOpacity>
				</View>
			</Animated.View>
		);
	}
}

export default SwipeCard;

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		minHeight: 425,
		padding: 5,
		overflow: 'hidden',
		marginHorizontal: -5,
	},
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
	},
});

{
	/* <Image
	style={{ width: null, minHeight: 300 }}
	source={{
		uri: imageURIs[0],
		headers: {
			Pragma: 'no-cache',
		},
		cache: 'reload',
	}}
/> */
}
