// Libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Components
import Slider from './Slider';
import ImageSlide from './ImageSlide';

class ImageSlider extends Component {
	state = {
		loadQueue: [0, 0, 0, 0, 0, 0],
	};

	loadHandle = idx => {
		const { loadQueue } = this.state;
		const newLoadQueue = [...loadQueue];
		newLoadQueue[idx] = 1;
		this.setState({
			loadQueue: newLoadQueue,
		});
	};

	render() {
		return (
			<View style={{ backgroundColor: 'red', flex: 1, minHeight: 300 }}>
				<Slider loadMinimal loadMinimalSize={1} style={{}} horizontal={true}>
					{this.props.imageList.map((item, idx) => {
						return (
							<ImageSlide
								loadHandle={this.loadHandle}
								loaded={!!this.state.loadQueue[idx]}
								uri={item}
								idx={idx}
								key={idx}
							/>
						);
					})}
				</Slider>
				<View>
					<Text>Current Loaded Images: {this.state.loadQueue}</Text>
				</View>
			</View>
		);
	}
}

export default ImageSlider;
