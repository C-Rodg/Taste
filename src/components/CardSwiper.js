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

// TODO:
// fix widths
// tweak animation
// style cards behind
// style card correctly
// enable touch to expand/close

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
		this.likeOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [0, 0, 1],
			extrapolate: 'clamp'
		});
		this.dislikeOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0, 0],
			extrapolate: 'clamp'
		});
		this.nextCardOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0, 1],
			extrapolate: 'clamp'
		});
		this.nextCardScale = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0.8, 1],
			extrapolate: 'clamp'
		});
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
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx > 120) {
					Animated.spring(this.position, {
						toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
					}).start(() => {
						this.setState(
							prevState => {
								return {
									currentIndex: prevState.currentIndex + 1
								};
							},
							() => {
								this.position.setValue({ x: 0, y: 0 });
							}
						);
					});
				} else if (gestureState.dx < -120) {
					Animated.spring(this.position, {
						toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
					}).start(() => {
						this.setState(
							prevState => {
								return {
									currentIndex: prevState.currentIndex + 1
								};
							},
							() => {
								this.position.setValue({ x: 0, y: 0 });
							}
						);
					});
				} else {
					Animated.spring(this.position, {
						toValue: { x: 0, y: 0 },
						friction: 4
					}).start();
				}
			}
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
						<Animated.View
							style={{
								opacity: this.likeOpacity,
								transform: [{ rotate: '-30deg' }],
								position: 'absolute',
								top: 50,
								left: 40,
								zIndex: 1000
							}}
						>
							<Text
								style={{
									borderWidth: 1,
									borderColor: 'green',
									color: 'green',
									fontSize: 32,
									fontWeight: '800',
									padding: 10
								}}
							>
								LIKE
							</Text>
						</Animated.View>
						<Animated.View
							style={{
								opacity: this.dislikeOpacity,
								transform: [{ rotate: '30deg' }],
								position: 'absolute',
								top: 50,
								right: 40,
								zIndex: 1000
							}}
						>
							<Text
								style={{
									borderWidth: 1,
									borderColor: 'red',
									color: 'red',
									fontSize: 32,
									fontWeight: '800',
									padding: 10
								}}
							>
								NOPE
							</Text>
						</Animated.View>
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
			} else {
				// Card that is behind
				return (
					<Animated.View
						key={user.firstName}
						style={[
							{
								opacity: this.nextCardOpacity,
								transform: [{ scale: this.nextCardScale }],
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
