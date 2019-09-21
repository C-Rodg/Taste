// Libraries
import React, { Component } from 'react';
import { View, ActivityIndicator, ScrollView, Dimensions } from 'react-native';

class ImageScrollViewSlider extends Component {
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
	}

	fullState() {
		return Object.assign({}, this.state, this.internals);
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

	onScrollBegin = e => {
		this.internals.isScrolling = true;
		this.props.onScrollBeginDrag &&
			this.props.onScrollBeginDrag(e, this.fullState, this);
	};

	onScrollEnd = e => {
		this.internals.isScrolling = false;

		if (!e.nativeEvent.contentOffset) {
			console.log('MUST BE ANDROID');
			if (this.state.dir === 'x') {
				e.nativeEvent.contentOffset = {
					x: e.nativeEvent.position * this.state.width,
				};
			} else {
				e.nativeEvent.contentOffset = {
					y: e.nativeEvent.position * this.state.height,
				};
			}
		}

		this.updateIndex(e.nativeEvent.contentOffset, this.state.dir, () => {
			this.props.onMomentumScrollEnd &&
				this.props.onMomentumScrollEnd(e, this.fullState(), this);
		});
	};

	onScrollEndDrag = e => {
		const { contentOffset } = e.nativeEvent;
		const { horizontal } = this.props;
		const { children, index } = this.state;
		const { offset } = this.internals;
		const previousOffset = horizontal ? offset.x : offset.y;
		const newOffset = horizontal ? contentOffset.x : contentOffset.y;

		if (
			previousOffset === newOffset &&
			(index === 0 || index === children.length)
		) {
			this.internals.isScrolling = false;
		}
	};

	updateIndex = (offset, dir, cb) => {
		const state = this.state;
		const callback = async () => {
			cb();
			if (Platform.OS === 'android') {
				if (this.state.index === 0) {
					this.props.horizontal
						? this.scrollView.scrollTo({
								x: state.width,
								y: 0,
								animated: false,
						  })
						: this.scrollView.scrollTo({
								x: 0,
								y: state.height,
								animated: false,
						  });
				} else if (this.state.index === this.state.total - 1) {
					this.props.horizontal
						? this.scrollView.scrollTo({
								x: state.width * this.state.total,
								y: 0,
								animated: false,
						  })
						: this.scrollView.scrollTo({
								x: 0,
								y: state.height * this.state.total,
								animated: false,
						  });
				}
			}
		};

		let index = state.index;
		if (!this.internals.offset) {
			this.internals.offset = {};
		}
		const diff = offset[dir] - this.internals.offset[dir];
		const step = dir === 'x' ? state.width : state.height;

		if (!diff) return;

		index = parseInt(index + Math.round(diff / step));

		const newState = {};
		newState.index = index;

		this.internals.offset = offset;

		this.setState(newState, callback);
	};

	scrollBy = (index, animated = true) => {
		if (this.internals.isScrolling || this.state.total < 2) {
			return;
		}

		const state = this.state;
		const diff = index + this.state.index;
		let x = 0;
		let y = 0;
		if (state.dir === 'x') {
			x = diff * state.width;
		} else if (state.dir === 'y') {
			y = diff * state.height;
		}

		this.scrollView && this.scrollView.scrollTo({ x, y, animated });

		this.internals.isScrolling = true;

		if (!animated || Platform.OS !== 'ios') {
			setImmediate(() => {
				this.onScrollEnd({
					nativeEvent: {
						position: diff,
					},
				});
			});
		}
	};

	scrollTo = (index, animated = true) => {
		if (
			this.internals.isScrolling ||
			this.state.total < 2 ||
			index == this.state.index
		) {
			return;
		}

		const state = this.state;
		const diff = this.state.index + (index - this.state.index);

		let x = 0;
		let y = 0;
		if (state.dir === 'x') {
			x = diff * state.width;
		} else if (state.dir === 'y') {
			y = diff * state.height;
		}

		this.scrollView && this.scrollView.scrollTo({ x, y, animated });

		this.internals.isScrolling = true;

		if (!animated || Platform.OS !== 'ios') {
			setImmediate(() => {
				this.onScrollEnd({
					nativeEvent: {
						position: diff,
					},
				});
			});
		}
	};

	scrollViewPropOverrides = () => {
		const props = this.props;
		let overrides = {};

		for (let prop in props) {
			if (
				typeof props[prop] === 'function' &&
				prop !== 'onMomentumScrollEnd' &&
				prop !== 'renderPagination' &&
				prop !== 'onScrollBeginDrag'
			) {
				let originResponder = props[prop];
				overrides[prop] = e => originalResponder(e, this.fullState(), this);
			}
		}

		return overrides;
	};

	renderPagination = () => {
		// TODO...
	};

	refScrollView = view => {
		this.scrollView = view;
	};

	onPageScrollStateChange = state => {
		switch (state) {
			case 'dragging':
				return this.onScrollBegin();
			case 'idle':
			case 'settling':
				if (this.props.onTouchEnd) {
					this.props.onTouchEnd();
				}
		}
	};

	renderScrollView = pages => {
		return (
			<ScrollView
				ref={this.refScrollView}
				{...this.props}
				{...this.scrollViewPropOverrides()}
				contentContainerStyle={[
					{ backgroundColor: 'transparent' },
					this.props.style,
				]}
				contentOffset={this.state.offset}
				onScrollBeginDrag={this.onScrollBegin}
				onMomentumScrollEnd={this.onScrollEnd}
				onScrollEndDrag={this.onScrollEndDrag}
				style={this.props.scrollViewStyle}
			/>
		);
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

export default ImageScrollViewSlider;
