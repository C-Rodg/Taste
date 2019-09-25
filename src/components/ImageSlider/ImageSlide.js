// Libraries
import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';

// Image slide element - TODO: add image loader
const ImageSlide = props => {
	return (
		<View style={styles.slide}>
			<Image
				onLoad={props.loadHandle.bind(null, props.idx)}
				source={{ uri: props.uri }}
				style={styles.image}
			/>
			{!props.loaded && (
				<View style={styles.loadingView}>
					<Text style={styles.loadingImage}>Loading image here...</Text>
				</View>
			)}
		</View>
	);
};

const { width } = Dimensions.get('window');
console.log('THE WIDTH FOR THE WINDOW IS: ' + width);
const styles = StyleSheet.create({
	slide: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	image: {
		width,
		flex: 1,
		backgroundColor: 'transparent',
	},
	loadingView: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,.5)',
	},
	loadingImage: {
		width: 60,
		height: 60,
		backgroundColor: 'pink',
	},
});

export default ImageSlide;
