// Libraries
import React from 'react';
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

export default ImageSlide;
