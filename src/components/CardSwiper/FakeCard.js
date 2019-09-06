import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class FakeCard extends Component {
	render() {
		return (
			<Animated.View style={this.props.cardStyles}>
				<View
					style={{
						padding: 15,
						minHeight: 390,
						backgroundColor: '#fcfcfc',
						borderRadius: 6,
						opacity: 0.95,
					}}
				></View>
			</Animated.View>
		);
	}
}

export default FakeCard;
