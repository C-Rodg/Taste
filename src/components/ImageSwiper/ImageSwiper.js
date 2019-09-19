// Libraries
import React, { Component } from 'react';
import { Text, Image, View, ActivityIndicator } from 'react-native';

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
			<View style={{ flex: 1 }}>
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

class SwiperWrapper extends Component {
	static defaultProps = {
		horizontal: true,
		index: 0,
		onIndexChanged: () => null,
		loadMinimalSize: 2,
		loadMinimal: true,
	};

	state = this.initState(this.props);

	initialRender = true;

	componentWillReceiveProps(nextProps) {
		if (nextProps.index === this.props.index) {
			return;
		}
		this.setState(
			this.initState(nextProps, this.props.index !== nextProps.index)
		);
	}

	componentDidUpdate(prevProps) {
		if (this.props.children !== prevProps.children) {
			this.setState(
				this.initState({ ...this.props, index: this.state.index }, true)
			);
		}
	}

	initState(props, updateIndex = false) {
		const state = this.state || { width: 0, height: 0, offset: { x: 0, y: 0 } };
		const initState = {
			children: null,
			offset: {},
		};

		initState.children = Array.isArray(props.children)
			? props.children.filter(child => child)
			: props.children;

		initState.total = initState.children ? initState.children.length || 1 : 0;

		if (state.total === initState.total && !updateIndex) {
			// keep index
			initState.index = state.index;
		} else {
			initState.index =
				initState.total > 1 ? Math.min(props.index, initState.total - 1) : 0;
		}

		const { width, height } = Dimensions.get('window');
		initState.dir = props.horizontal === false ? 'y' : 'x';

		if (props.width) {
			initState.width = props.width;
		} else if (this.state && this.state.width) {
			initState.width = this.state.width;
		} else {
			initState.width = width;
		}

		if (props.height) {
			initState.height = props.height;
		} else if (this.state && this.state.height) {
			initState.height = this.state.height;
		} else {
			initState.height = height;
		}

		initState[initState.dir] =
			initState.dir === 'y' ? height * props.index : width * props.index;

		this.internals = {
			...this.internals,
			isScrolling: false,
		};
		return initState;
		// TODO: Start onScroll events
	}

	onLayout = event => {
		const { width, height } = event.nativeEvent.layout;
		const offset = (this.internals.offset = {});
		const state = { width, height };

		if (this.state.total > 1) {
			let setup = this.state.index;
			offset[this.state.dir] =
				this.state.dir === 'y' ? height * setup : width * setup;
		}

		if (
			!this.state.offset ||
			width !== this.state.width ||
			height !== this.state.height
		) {
			state.offset = offset;
		}

		if (this.initialRender && this.state.total > 1) {
			this.scrollView.scrollTo({ ...offset, animated: false });
			this.initialRender = false;
		}

		this.setState(state);
	};

	render() {
		const { index, total, width, height, children } = this.state;
		const { loadMinimal } = this.props;
		let pages = [];

		// STYLES
		const pageStyle = [{ width, height }, { backgroundColor: 'transparent' }];
		const pageStyleLoading = {
			width,
			height,
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		};

		if (total > 1) {
			pages = Object.keys(children);

			pages = pages.map((page, i) => {
				if (loadMinimal) {
					if (i >= index - loadMinimalSize && i <= index + loadMinimalSize) {
						return (
							<View style={pageStyle} key={i}>
								{children[page]}
							</View>
						);
					} else {
						return (
							<View style={pageStyleLoading} key={i}>
								<ActivityIndicator />
							</View>
						);
					}
				} else {
					return (
						<View style={pageStyle} key={i}>
							{children[page]}
						</View>
					);
				}
			});
		} else {
			pages = (
				<View style={pageStyle} key={0}>
					{children}
				</View>
			);
		}
		return (
			<View
				style={{
					backgroundColor: 'transparent',
					position: 'relative',
					flex: 1,
				}}
				onLayout={this.onLayout}
			>
				{this.renderScrollView(pages)}
			</View>
		);
	}
}

export default ImageSwiper;
