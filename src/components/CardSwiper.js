import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Fragment,
	Animated,
	PanResponder
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const MOCK_CARDS = [
	{
		firstName: 'Jenny',
		lastName: 'Thompson',
		age: 26,
		location: 'Seattle, WA',
		title: 'Marketing'
	},
	{
		firstName: 'Bridget',
		lastName: 'Jones',
		age: 34,
		location: 'Spokane, WA',
		title: 'CEO'
	},
	{
		firstName: 'Kristin',
		lastName: 'Jones',
		age: 22,
		location: 'Los Angeles, CA',
		title: 'Assistant'
	},
	{
		firstName: 'Adeline',
		lastName: 'Koh',
		age: 26,
		location: 'Hanoi, VN',
		title: 'Director'
	},
	{
		firstName: 'Sarah',
		lastName: 'Jackson',
		age: 24,
		location: 'Miami, FL',
		title: 'Model'
	}
];

class CardSwiper extends Component {
	constructor() {
		super();

		this.position = new Animated.ValueXY();
		this.rotate = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: ['-10deg', '0deg', '10deg'],
			extrapolate: 'clamp'
		});
		this.rotateAndTranslate = {
			transform: [
				{
					rotate: this.rotate
				},
				...this.position.getTranslateTransform()
			]
		};
		this.state = {
			currentIndex: 0
		};
	}
	componentDidMount() {
		this.PanResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderMove: (evt, gestureState) => {
				this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
			},
			onPanResponderRelease: (evt, gestureState) => {}
		});
	}

	renderCards = () => {
		return MOCK_CARDS.map((user, idx) => {
			if (idx < this.state.currentIndex) {
				// Card has already been swiped
				return null;
			} else if (idx === this.state.currentIndex) {
				// Top card
				return (
					<Animated.View
						key={user.firstName}
						{...this.PanResponder && this.PanResponder.panHandlers}
						style={[
							this.rotateAndTranslate,
							{
								height: 300,
								width: SCREEN_WIDTH - 20,
								margin: 10,
								position: 'absolute'
							}
						]}
					>
						<View
							style={{ backgroundColor: '#fff', borderRadius: 20, padding: 8 }}
						>
							<Text>
								{user.firstName} {user.lastName}
							</Text>
							<Text>{user.age}</Text>
							<Text>{user.title}</Text>
							<Text>{user.location}</Text>
							<Text>Foods</Text>
							<Text>Image</Text>
						</View>
					</Animated.View>
				);
			} else {
				// Card that is behind
				return (
					<Animated.View
						key={user.firstName}
						style={[
							{
								width: SCREEN_WIDTH - 20,
								margin: 10,
								position: 'absolute'
							}
						]}
					>
						<View
							style={{
								height: 300,
								backgroundColor: '#fff',
								borderRadius: 20,
								padding: 8
							}}
						>
							<Text>
								{user.firstName} {user.lastName}
							</Text>
							<Text>{user.age}</Text>
							<Text>{user.title}</Text>
							<Text>{user.location}</Text>
							<Text>Foods</Text>
							<Text>Image</Text>
						</View>
					</Animated.View>
				);
			}
		}).reverse();
	};

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				{this.renderCards()}
			</View>
		);
	}
}

export default CardSwiper;
