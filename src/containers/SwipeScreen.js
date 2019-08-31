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
} from 'react-native';

// Components
import { CardSwiper, SwipeCard } from '../components/CardSwiper';

// Icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Props
import COLORS from '../styles/colors';

const CARDS = [
	{
		id: 1,
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		name: 'Micky Wilson',
		age: 28,
		title: 'CEO',
		location: 'Little India, Singapore, Singapore',
		school: 'University of Washington',
		foods: [
			{ value: 'Mexican', isMatch: false },
			{ value: 'Korean', isMatch: true },
		],
		lookingFor: [
			{ value: 'Foodie Friend', isMatch: false },
			{ value: 'Drinking Buddy', isMatch: true },
			{ value: 'Relationship', isMatch: false },
		],
		bio:
			"Hey! I'm Micky. I'm oly 152cm, so it's not going to be too tough to beat my height 🇰🇷 ",
	},
	{
		id: 2,
		name: 'Bobbi Jones',
		imageURI: 'https://source.unsplash.com/random/600x700?person',
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
		imageURI: 'https://source.unsplash.com/random/600x700?person',
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
		imageURI: 'https://source.unsplash.com/random/600x700?person',
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
		imageURI: 'https://source.unsplash.com/random/600x700?person',
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
		imageURI: 'https://source.unsplash.com/random/600x700?person',
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
		imageURI: 'https://source.unsplash.com/random/600x700?person',
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
		imageURI: 'https://source.unsplash.com/random/600x700?person',
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
		imageURI: 'https://source.unsplash.com/random/600x700?person',
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
		imageURI: 'https://source.unsplash.com/random/600x700?person',
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
	componentDidMount() {}

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="light-content" />
				<SafeAreaView style={{ flex: 1 }}>
					<View style={styles.container}>
						<View style={styles.cards}>
							<CardSwiper
								ref={c => (this._cardSwiper = c)}
								dataSource={CARDS}
								renderEmpty={() => <Text>ALLLLL OVER</Text>}
								renderItem={item => {
									return <SwipeCard key={item.id} {...item} />;
								}}
								looping={false}
							/>
						</View>
					</View>
					<TouchableOpacity
						style={styles.swipeLeftButton}
						activeOpacity={0.87}
						onPress={() => this._cardSwiper.swipeLeft()}
					>
						<Text style={styles.swipeLeftIconWrapper}>
							<MaterialCommunityIcon name="close" color="#fff" size={42} />
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.swipeRightButton}
						activeOpacity={0.87}
						onPress={() => this._cardSwiper.swipeRight()}
					>
						<Text style={styles.swipeRightIconWrapper}>
							<MaterialCommunityIcon name="check" color="#fff" size={42} />
						</Text>
					</TouchableOpacity>
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
	container: {
		flex: 1,
		backgroundColor: COLORS.lightGray,
	},
	cards: {
		flex: 1,
		marginVertical: 40,
		marginHorizontal: 20,
	},
	swipeLeftButton: {
		opacity: 0.94,
		position: 'absolute',
		backgroundColor: '#080808',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 110,
		height: 110,
		borderRadius: 55,
		top: '38%',
		left: -50,
	},
	swipeRightButton: {
		opacity: 0.94,
		position: 'absolute',
		backgroundColor: COLORS.pink,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 110,
		height: 110,
		borderRadius: 55,
		top: '38%',
		right: -50,
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
