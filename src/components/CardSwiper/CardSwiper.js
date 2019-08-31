// Libraries
import React, { Component } from 'react';
import { View, Animated, PanResponder, StyleSheet } from 'react-native';

// Components
import FakeCard from './FakeCard';

// Utils
import { clamp } from '../../utils/clamp';

const SWIPE_THRESHOLD = 120;

class CardSwiper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pan: new Animated.ValueXY(),
			enter: new Animated.Value(0.9),
			selectedItem: this.props.dataSource[0],
			selectedItem2: this.props.dataSource[1],
			card1Top: true,
			card2Top: false,
			fadeAnim: new Animated.Value(0.8),
			disabled: this.props.dataSource.length === 0,
			lastCard: this.props.dataSource.length === 1,
			secondLastCard: this.props.dataSource.length === 2,
		};
		this.setPanresponder();
	}

	componentDidUpdate({ dataSource }) {
		if (dataSource.length !== this.props.dataSource.length) {
			if (dataSource.length <= 1) {
				this.setState({
					...this.state,
					selectedItem: dataSource[0],
					selectedItem2: undefined,
					disabled: dataSource.length === 0,
					lastCard: dataSource.length === 1,
					secondLastCard: dataSource.length === 2,
				});
				return;
			}

			const visibleIndex = dataSource.indexOf(this.state.selectedItem);
			const currentIndex = visibleIndex < 0 ? visibleIndex + 1 : visibleIndex;
			const nextIndex =
				currentIndex + 1 === dataSource.length ? 0 : currentIndex + 1;

			this.setState({
				selectedItem: dataSource[currentIndex],
				selectedItem2: dataSource[nextIndex],
			});
		}
	}

	getInitialStyle = () => {
		return {
			topCard: {
				flex: 1,
				position: 'absolute',
				top: 12,
				right: 0,
				left: 0,
				bottom: 0,
			},
			secondCard: {
				flex: 1,
				position: 'absolute',
				top: 0,
				right: 0,
				left: 0,
				bottom: 0,
			},
			thirdCard: {
				flex: 1,
				position: 'absolute',
				top: -10,
				right: 0,
				left: 0,
				bottom: 0,
			},
		};
	};

	getCardStyles = () => {
		const { pan, enter } = this.state;
		const [translateX] = [pan.x, pan.y];

		// TOP CARD - controls rotation as you drag
		const topCardRotate = pan.x.interpolate({
			inputRange: [-700, 0, 700],
			outputRange: ['-50deg', '0deg', '50deg'],
		});

		// TOP CARD - controls opacity as you drag
		const topCardOpacity = pan.x.interpolate({
			inputRange: [-320, 0, 320],
			outputRange: [0.85, 1, 0.85],
		});

		// 2ND CARD - controls scale as you drag
		const secondCardScale = enter;

		// 2ND CARD - controls the 'top' property as you drag
		const absoluteTopPosition = secondCardScale.interpolate({
			inputRange: [0.9, 1],
			outputRange: [0, 12],
		});

		// 3RD CARD - controls the scale as you drag
		const thirdCardScale = secondCardScale.interpolate({
			inputRange: [0.9, 1],
			outputRange: [0.8, 0.9],
		});

		// 3RD CARD - controls the 'top' property as you drag
		const thirdCardTopPosition = secondCardScale.interpolate({
			inputRange: [0.9, 1],
			outputRange: [-10, 0],
		});

		// TOP CARD:
		const topCardAnimatedStyles = {
			transform: [{ translateX }, { rotate: topCardRotate }],
			opacity: topCardOpacity,
		};
		// 2ND CARD:
		const secondCardAnimatedStyles = {
			top: absoluteTopPosition,
			transform: [{ scale: secondCardScale }],
		};
		// 3RD CARD:
		const thirdCardAnimatedStyles = {
			top: thirdCardTopPosition,
			transform: [{ scale: thirdCardScale }],
		};

		return [
			topCardAnimatedStyles,
			secondCardAnimatedStyles,
			thirdCardAnimatedStyles,
		];
	};

	setPanresponder() {
		this._panResponder = PanResponder.create({
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
				Math.abs(gestureState.dx) > 5,
			onPanResponderGrant: () => {
				this.state.pan.setOffset({
					x: this.state.pan.x._value,
					y: this.state.pan.y._value,
				});
				this.state.pan.setValue({ x: 0, y: 0 });
			},
			onPanResponderMove: (e, gestureState) => {
				if (gestureState.dx > 20) {
					if (this.props.onSwiping) {
						this.props.onSwiping('right', gestureState.dx);
					}
				} else if (gestureState.dx < -20) {
					if (this.props.onSwiping) {
						this.props.onSwiping('left', gestureState.dx);
					}
				}
				let val = Math.abs(gestureState.dx * 0.0013);
				if (val > 0.1) {
					val = 0.1;
				}

				Animated.timing(this.state.fadeAnim, { toValue: 0.8 + val }).start();
				Animated.spring(this.state.enter, {
					toValue: 0.9 + val,
					friction: 7,
				}).start();

				Animated.event([null, { dx: this.state.pan.x }])(e, gestureState);
			},
			// on RELEASE
			onPanResponderRelease: (e, { vx, vy }) => {
				if (this.props.onSwiping) {
					this.props.onSwiping(null);
				}
				let velocity;
				if (vx >= 0) {
					velocity = clamp(vx, 4.5, 10);
				} else if (vx < 0) {
					velocity = clamp(vx * -1, 4.5, 10) * -1;
				}

				if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
					// You've swiped far enough left or right - go to next item
					if (velocity > 0) {
						this.props.onSwipeRight
							? this.props.onSwipeRight(this.state.selectedItem)
							: undefined;
					} else {
						this.props.onSwipeLeft
							? this.props.onSwipeLeft(this.state.selectedItem)
							: undefined;
					}
					this.selectNext();
					Animated.decay(this.state.pan, {
						velocity: { x: velocity, y: vy },
						deceleration: 0.98,
					}).start(this._resetState.bind(this));
				} else {
					// This occurs when you haven't swiped far enough to a side
					Animated.spring(this.state.pan, {
						toValue: { x: 0, y: 0 },
						friction: 4,
					}).start();
				}
			},
		});
	}

	_resetState() {
		this.state.pan.setValue({ x: 0, y: 0 });
		this.state.enter.setValue(0.9);

		this.state.fadeAnim.setValue(0.8);
		this.setState({
			card1Top: !this.state.card1Top,
			card2Top: !this.state.card2Top,
		});
		if (this.props.onSwiping) {
			this.props.onSwiping(null);
		}
	}

	swipeRight() {
		if (this.props.onSwiping) {
			this.props.onSwiping('right');
		}
		setTimeout(() => {
			Animated.timing(this.state.fadeAnim, { toValue: 1 }).start();
			Animated.spring(this.state.enter, { toValue: 1, friction: 7 }).start();
			this.selectNext();
			Animated.decay(this.state.pan, {
				velocity: { x: 8, y: 1 },
				deceleration: 0.98,
			}).start(this._resetState.bind(this));
		}, 300);
	}

	swipeLeft() {
		if (this.props.onSwiping) {
			this.props.onSwiping('left');
		}
		setTimeout(() => {
			Animated.timing(this.state.fadeAnim, { toValue: 1 }).start();
			Animated.spring(this.state.enter, { toValue: 1, friction: 7 }).start();
			this.selectNext();
			Animated.decay(this.state.pan, {
				velocity: { x: -8, y: 1 },
				deceleration: 0.98,
			}).start(this._resetState.bind(this));
		}, 300);
	}

	selectNext() {
		const dataSource = this.props.dataSource;
		const currentIndex = dataSource.indexOf(this.state.selectedItem);
		let secondLastCard = false;

		// Check if we are at the end or close to it
		if (currentIndex === dataSource.length - 1) {
			return this.setState({
				disabled: true,
			});
		} else if (currentIndex === dataSource.length - 2) {
			return setTimeout(() => {
				this.setState({ selectedItem: dataSource[currentIndex + 1] });
				setTimeout(() => {
					this.setState({ lastCard: true });
				}, 350);
			}, 50);
		} else if (currentIndex === dataSource.length - 3) {
			secondLastCard = true;
		}

		const nextIndexes = this.findNextIndexes(currentIndex);
		setTimeout(() => {
			this.setState({
				secondLastCard,
				selectedItem: this.props.dataSource[nextIndexes[0]],
			});
			setTimeout(() => {
				this.setState({
					selectedItem2: this.props.dataSource[nextIndexes[1]],
				});
			}, 350);
		}, 50);

		return null;
	}

	findNextIndexes(currentIndex) {
		const newIdx = currentIndex + 1;
		const newIdx2 = currentIndex + 2;

		if (
			newIdx2 > this.props.dataSource.length - 1 &&
			newIdx === this.props.dataSource.length - 1
		) {
			return [newIdx, 0];
		} else if (newIdx > this.props.dataSource.length - 1) {
			return [0, 1];
		}
		return [newIdx, newIdx2];
	}

	render() {
		// Disabled state
		if (this.state.disabled) {
			return (
				<View style={{ flexDirection: 'column' }}>
					{<View>{this.props.renderEmpty && this.props.renderEmpty()}</View>}
				</View>
			);
		}
		const cardStyles = this.getCardStyles();
		if (this.state.lastCard) {
			// Last Card
			return (
				<View style={{ flexDirection: 'column', position: 'relative' }}>
					{this.state.selectedItem === undefined ? (
						<View />
					) : (
						<View>
							<Animated.View
								style={[this.getInitialStyle().topCard, cardStyles[0]]}
								{...this._panResponder.panHandlers}
							>
								{this.props.renderItem(this.state.selectedItem)}
							</Animated.View>
						</View>
					)}
				</View>
			);
		}
		return (
			<View
				style={{
					flexDirection: 'column',
					position: 'relative',
					flex: 1,
				}}
			>
				{this.state.selectedItem === undefined ? (
					<View />
				) : (
					<View>
						{!this.state.secondLastCard ? (
							<FakeCard
								cardStyles={[this.getInitialStyle().thirdCard, cardStyles[2]]}
							/>
						) : null}

						<Animated.View
							style={[
								this.getInitialStyle().secondCard,
								cardStyles[1],
								{ opacity: this.state.fadeAnim },
							]}
							{...this._panResponder.panHandlers}
						>
							{this.props.renderItem(this.state.selectedItem2)}
						</Animated.View>
						<Animated.View
							style={[this.getInitialStyle().topCard, cardStyles[0]]}
							{...this._panResponder.panHandlers}
						>
							{this.props.renderItem(this.state.selectedItem)}
						</Animated.View>
					</View>
				)}
			</View>
		);
	}
}

export default CardSwiper;
