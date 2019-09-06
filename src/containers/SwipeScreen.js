// Libraries
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	View,
	Text,
	Button,
	StatusBar,
	Dimensions,
	Animated,
} from 'react-native';

// Components
import { CardSwiper, SwipeCard, EmptyMessage } from '../components/CardSwiper';

// Icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Props
import COLORS from '../styles/colors';

const CARDS = [
	{
		id: 1,
		imageURIs: [
			'https://source.unsplash.com/random/600x700?person',
			'https://source.unsplash.com/random/600x700?dog',
		],
		name: 'Micky Wilson',
		age: 28,
		title: 'CEO',
		location: 'Little India, Singapore, Singapore',
		school: 'University of Washington',
		foods: [
			{ value: 'Mexican', isMatch: false },
			{ value: 'Korean', isMatch: true },
			{ value: 'Chinese', isMatch: false },
			{ value: 'Italian', isMatch: true },
			{ value: 'Drinks', isMatch: true },
			{ value: 'Soda', isMatch: false },
		],
		lookingFor: [
			{ value: 'Foodie Friend', isMatch: false },
			{ value: 'Drinking Buddy', isMatch: true },
			{ value: 'Relationship', isMatch: false },
		],
		bio:
			"Hey! I'm Micky. I'm oly 152cm, so it's not going to be too tough to beat my height. Wooohooo yeah yea 🇰🇷 ",
	},
	{
		id: 2,
		name: 'Bobbi Jones',
		imageURIs: [
			'https://source.unsplash.com/random/600x700?person',
			'https://source.unsplash.com/random/600x700?dog',
		],
		age: 33,
		title: 'Software Engineer',
		location: 'Florence, Italy',
		school: 'Harvard University',
		foods: [
			{ value: 'Chinese', isMatch: true },
			{ value: 'Mexican', isMatch: false },
			{ value: 'Korean', isMatch: false },
		],
		lookingFor: [
			{ value: 'Foodie Friend', isMatch: true },
			{ value: 'Drinking Buddy', isMatch: true },
			{ value: 'Relationship', isMatch: false },
		],
		bio: 'Dont even try your stupid polar bear jokes on me...',
	},
	{
		id: 3,
		name: 'Wintona Wild',
		imageURIs: [
			'https://source.unsplash.com/random/600x700?person',
			'https://source.unsplash.com/random/600x700?dog',
		],
		age: 22,
		title: 'HR Lady',
		location: 'District 1, Saigon, Vietnam',
		school: 'Taiwan School of Arts',
		foods: [
			{ value: 'American', isMatch: false },
			{ value: 'Mexican', isMatch: false },
			{ value: 'Canadian', isMatch: true },
		],
		lookingFor: [
			{ value: 'Drinking Buddy', isMatch: true },
			{ value: 'Relationship', isMatch: false },
		],
		bio: 'Hey dont know why im on here.  My friends made me sign up (lie).',
	},
	{
		id: 4,
		name: 'Nikki Hughes',
		imageURIs: [
			'https://source.unsplash.com/random/600x700?person',
			'https://source.unsplash.com/random/600x700?dog',
		],
		age: 24,
		title: 'Accountant',
		location: 'Canggu, Bali, Indonesia',
		school: 'Singapore University',
		foods: [
			{ value: 'American', isMatch: true },
			{ value: 'Mexican', isMatch: false },
			{ value: 'Canadian', isMatch: true },
		],
		lookingFor: [
			{ value: 'Foodie Friend', isMatch: false },

			{ value: 'Relationship', isMatch: false },
		],
		bio: 'Just looking for guys to venmo me.',
	},
	{
		id: 5,
		name: 'Sansa Gozda',
		imageURIs: [
			'https://source.unsplash.com/random/600x700?person',
			'https://source.unsplash.com/random/600x700?dog',
		],
		age: 23,
		title: 'Librarian',
		location: 'Seoul, South Korea',
		school: 'Wisconsin University',
		foods: [
			{ value: 'Desserts', isMatch: true },
			{ value: 'Mexican', isMatch: false },
			{ value: 'Canadian', isMatch: true },
		],
		lookingFor: [
			{ value: 'Foodie Friend', isMatch: false },
			{ value: 'Relationship', isMatch: false },
			{ value: 'Drinking Buddy', isMatch: true },
		],
		bio:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
	},
	{
		id: 6,
		name: 'Yui Ju',
		imageURIs: [
			'https://source.unsplash.com/random/600x700?person',
			'https://source.unsplash.com/random/600x700?dog',
		],
		age: 22,
		title: 'Developer',
		location: 'Seattle, Washington, USA',
		school: 'Washington State University',
		foods: [
			{ value: 'Turkish', isMatch: false },
			{ value: 'Mexican', isMatch: true },
			{ value: 'Canadian', isMatch: true },
		],
		lookingFor: [
			{ value: 'Drinking Buddy', isMatch: false },
			{ value: 'Foodie Friend', isMatch: true },
			{ value: 'Relationship', isMatch: true },
		],
		bio:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
	},
	{
		id: 7,
		name: 'Finding Dori',
		imageURIs: [
			'https://source.unsplash.com/random/600x700?person',
			'https://source.unsplash.com/random/600x700?dog',
		],
		age: 21,
		title: 'Real Estate',
		location: 'Santa Monica, California',
		school: 'Oregon State',
		foods: [
			{ value: 'Greek', isMatch: false },
			{ value: 'English', isMatch: false },
		],
		lookingFor: [
			{ value: 'Foodie Friend', isMatch: true },
			{ value: 'Drinking Buddy', isMatch: true },
		],
		bio:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
	},
	{
		id: 8,
		name: 'Bla Tulik',
		imageURIs: [
			'https://source.unsplash.com/random/600x700?person',
			'https://source.unsplash.com/random/600x700?dog',
		],
		age: 24,
		title: 'Lawyer',
		location: 'Echo Park, Los Angeles, California',
		school: 'Univeristy of Southern California',
		foods: [
			{ value: 'Mexican', isMatch: false },
			{ value: 'Peruvian', isMatch: true },
		],
		lookingFor: [
			{ value: 'Foodie Friend', isMatch: true },
			{ value: 'Drinking Buddy', isMatch: true },
			{ value: 'Relationship', isMatch: true },
		],
		bio:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
	},
	{
		id: 9,
		name: 'Jackson Jones',
		imageURIs: [
			'https://source.unsplash.com/random/600x700?person',
			'https://source.unsplash.com/random/600x700?dog',
		],
		age: 28,
		title: 'Accountant for HR',
		location: 'Mexico City, Mexico',
		school: 'Deleware University',
		foods: [
			{ value: 'Beer', isMatch: false },
			{ value: 'American', isMatch: false },
		],
		lookingFor: [{ value: 'Relationship', isMatch: true }],
		bio:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
	},
	{
		id: 10,
		name: 'Jackie Wilso',
		imageURIs: [
			'https://source.unsplash.com/random/600x700?person',
			'https://source.unsplash.com/random/600x700?dog',
		],
		age: 32,
		title: 'Profession Basketball Player',
		location: 'Los Angeles, California',
		school: 'University of Washington',
		foods: [
			{ value: 'American', isMatch: false },
			{ value: 'English', isMatch: true },
		],
		lookingFor: [
			{ value: 'Hookups', isMatch: false },
			{ value: 'Drinking Buddy', isMatch: true },
		],
		bio:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
	},
];

class SwipeScreen extends Component {
	state = {
		cardIsOpen: false,
		animatedLeft: new Animated.Value(0),
		animatedRight: new Animated.Value(0),
	};

	// Toggle Card being open
	handleToggleCardOpen = () => {
		const isCardOpening = !this.state.cardIsOpen;
		isCardOpening
			? this.setSwipersVisible(false)
			: this.setSwipersVisible(true);
		this.setState({ cardIsOpen: isCardOpening });
	};

	handleGetMoreCards = () => {
		console.log('TODO: GET MORE CARDS');
	};

	// Get left and right swipe animation styles
	getSwipeButtonStyles = () => {
		const { animatedLeft, animatedRight } = this.state;

		return {
			left: {
				position: 'absolute',
				top: '38%',
				left: -50,
				transform: [{ translateX: animatedLeft }],
			},
			right: {
				position: 'absolute',
				top: '38%',
				right: -50,
				transform: [{ translateX: animatedRight }],
			},
		};
	};

	// Show/hide swiper buttons
	setSwipersVisible = setVisible => {
		const newTranslateValue = setVisible ? 0 : 180;
		Animated.spring(this.state.animatedLeft, {
			toValue: newTranslateValue * -1,
			friction: 7,
		}).start();
		Animated.spring(this.state.animatedRight, {
			toValue: newTranslateValue,
			friction: 7,
		}).start();
	};

	// Get scrollview height
	getScrollViewContentStyles = () => {
		// just setting arbitrary values for now of estimated height ranges
		// eventually should refactor to get exact view heights
		const { cardIsOpen } = this.state;
		const screenHeight = Dimensions.get('screen').height;
		const paddingBottom = cardIsOpen ? 1.3 * screenHeight : 0.7 * screenHeight;
		return {
			paddingBottom,
		};
	};

	render() {
		const swipeButtonStyles = this.getSwipeButtonStyles();
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView style={{ flex: 1 }}>
					<ScrollView
						style={styles.scrollView}
						contentContainerStyle={this.getScrollViewContentStyles()}
					>
						<CardSwiper
							ref={c => (this._cardSwiper = c)}
							dataSource={CARDS}
							renderEmpty={() => {
								this.setSwipersVisible(false);
								return (
									<EmptyMessage onGetMoreCards={this.handleGetMoreCards} />
								);
							}}
							renderItem={(item, isCurrent) => {
								return (
									<SwipeCard
										key={item.id}
										isCurrent={isCurrent}
										cardIsOpen={this.state.cardIsOpen}
										onToggleCardOpen={this.handleToggleCardOpen}
										{...item}
									/>
								);
							}}
							cardIsOpen={this.state.cardIsOpen}
							looping={false}
						/>
					</ScrollView>

					<Animated.View style={swipeButtonStyles.left}>
						<TouchableOpacity
							style={styles.swipeLeftButton}
							activeOpacity={0.87}
							onPress={() => this._cardSwiper.swipeLeft()}
						>
							<Text style={styles.swipeLeftIconWrapper}>
								<MaterialCommunityIcon name="close" color="#fff" size={42} />
							</Text>
						</TouchableOpacity>
					</Animated.View>

					<Animated.View style={swipeButtonStyles.right}>
						<TouchableOpacity
							style={styles.swipeRightButton}
							activeOpacity={0.87}
							onPress={() => this._cardSwiper.swipeRight()}
						>
							<Text style={styles.swipeRightIconWrapper}>
								<MaterialCommunityIcon name="check" color="#fff" size={42} />
							</Text>
						</TouchableOpacity>
					</Animated.View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	const { currentUser } = state.user;
	return {
		currentUser,
	};
};

export default connect(mapStateToProps)(SwipeScreen);

const styles = StyleSheet.create({
	scrollView: {
		paddingHorizontal: 20,
		paddingTop: 35,
		flex: 1,
		backgroundColor: COLORS.lightGray,
	},
	swipeLeftButton: {
		opacity: 0.94,
		backgroundColor: '#080808',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 110,
		height: 110,
		borderRadius: 55,
	},
	swipeRightButton: {
		opacity: 0.94,
		backgroundColor: COLORS.pink,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 110,
		height: 110,
		borderRadius: 55,
	},
	swipeLeftIconWrapper: {
		paddingLeft: 30,
		paddingTop: 5,
	},
	swipeRightIconWrapper: {
		paddingRight: 33,
		paddingTop: 5,
	},
});
