// Libraries
import React, { Component } from 'react';
import {
	View,
	Image,
	Dimensions,
	StyleSheet,
	TouchableWithoutFeedback,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Get initial screen width
const width = Dimensions.get('window').width;

class SliderCarousel extends Component {
	static defaultProps = {
		dotColor: '#BDBDBD',
		inactiveDotColor: '#FFFFFF',
		loop: false,
		sliderBoxHeight: 300,
		showDots: true,
	};

	state = {
		currentImage: 0,
	};

	_renderItem({ item, index }) {
		return (
			<TouchableWithoutFeedback key={index} onPress={this.props.onImagePress}>
				<Image
					style={{
						width: width - 70,
						flex: 1,
					}}
					source={{ uri: item }}
				/>
			</TouchableWithoutFeedback>
		);
	}

	get pagination() {
		const { paginationBoxStyle } = this.props;
		return (
			<Pagination
				borderRadius={2}
				dotsLength={this.props.images.length}
				activeDotIndex={this.state.currentImage}
				containerStyle={[
					styles.paginationBoxStyle,
					this.props.paginationBoxVerticalPadding
						? { paddingVertical: this.props.paginationBoxVerticalPadding }
						: {},
					paginationBoxStyle ? paginationBoxStyle : {},
				]}
				dotStyle={this.props.dotStyle || styles.dotStyle}
				dotColor={this.props.dotColor}
				inactiveDotColor={this.props.inactiveDotColor}
				inactiveDotOpacity={0.8}
				inactiveDotScale={0.8}
				carouselRef={this._ref}
				tappableDots={!!this._ref}
			/>
		);
	}

	render() {
		return (
			<View
				style={{
					borderRadius: 2,
					flex: 1,
					minHeight: this.props.sliderBoxHeight,
				}}
			>
				<Carousel
					borderTopRightRadius={2}
					borderTopLeftRadius={2}
					ref={c => (this._ref = c)}
					data={this.props.images}
					renderItem={item => this._renderItem(item)}
					onSnapToItem={index => this.setState({ currentImage: index })}
					layout={'default'}
					sliderWidth={this.props.parentWidth || width}
					itemWidth={this.props.parentWidth || width}
					loop={this.props.loop}
				/>
				{this.props.images.length > 1 &&
					this.props.isEnabled &&
					this.pagination}
			</View>
		);
	}
}

export default SliderCarousel;

const styles = StyleSheet.create({
	paginationBoxStyle: {
		position: 'absolute',
		bottom: 0,
		padding: 0,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
	},
	dotStyle: {
		width: 10,
		height: 10,
		borderRadius: 5,
		marginHorizontal: 0,
		padding: 0,
		margin: 0,
		backgroundColor: 'rgba(128, 128, 128, 0.92)',
	},
});
