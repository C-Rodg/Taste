// Libraries
import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

// Image slide element - TODO: add image loader
const ImageSlide = props => {
	return (
		<View>
			<Image
				onLoad={props.loadHandle.bind(null, props.idx)}
				source={{ uri: props.uri }}
			/>
			{!props.loaded && (
				<View>
					<Text>Loading image here...</Text>
				</View>
			)}
		</View>
	);
};

class ImageSwiper extends Component {
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
			<View>
				{this.props.imageList.map((item, idx) => {
					<ImageSlide
						loadHandle={this.loadHandle}
						loaded={!!this.state.loadQueue[idx]}
						uri={item}
						idx={idx}
						key={idx}
					/>;
				})}
			</View>
		);
	}
}

export default ImageSwiper;
