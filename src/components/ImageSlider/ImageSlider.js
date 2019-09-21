// Libraries
import React, { Component } from 'react';
import { View } from 'react-native';

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
			<View style={{ flex: 1 }}>
				<Slider loadMinimal loadMinimalSize={2}>
					{this.props.imageList.map((item, idx) => {
						<ImageSlide
							loadHandle={this.loadHandle}
							loaded={!!this.state.loadQueue[idx]}
							uri={item}
							idx={idx}
							key={idx}
						/>;
					})}
				</Slider>
			</View>
		);
	}
}

export default ImageSlider;
