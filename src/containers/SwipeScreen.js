// Libraries
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
	StatusBar,
} from 'react-native';

// Components
import { CardSwiper, SwipeCard } from '../components/CardSwiper';

// Props
import COLORS from '../styles/colors';

const CARDS = [
	{
		id: 1,
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		name: 'Micky Wilson',
		age: 28,
		title: 'CEO',
		foods: ['Mexican', 'Korean'],
	},
	{
		id: 2,
		name: 'Bobbi Jones',
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		age: 33,
		title: 'Software Engineer',
		foods: ['Korean', 'Chinese', 'Vietnamese'],
	},
	{
		id: 3,
		name: 'Wintona Wild',
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		age: 22,
		title: 'HR Lady',
		foods: ['Mexica', 'American', 'Italian'],
	},
	{
		id: 4,
		name: 'Nikki Hughes',
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		age: 24,
		title: 'Accountant',
		foods: ['Cocktails', 'Wine'],
	},
	{
		id: 5,
		name: 'Sansa Gozda',
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		age: 23,
		title: 'Librarian',
		foods: ['Desserts', 'French', 'Malaysian'],
	},
	{
		id: 6,
		name: 'Yui Ju',
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		age: 22,
		title: 'Developer',
		foods: ['Middle Easter', 'Turkish', 'American'],
	},
	{
		id: 7,
		name: 'Finding Dori',
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		age: 21,
		title: 'Real Estate',
		foods: ['Greek', 'English'],
	},
	{
		id: 8,
		name: 'Bla Tulik',
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		age: 24,
		title: 'Lawyer',
		foods: ['Mexican', 'Peruvian'],
	},
	{
		id: 9,
		name: 'Jackson Jones',
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		age: 28,
		title: 'Accountant for HR',
		foods: ['Beer', 'American'],
	},
	{
		id: 10,
		name: 'Jackie Wilso',
		imageURI: 'https://source.unsplash.com/random/600x700?person',
		age: 32,
		title: 'Profession Basketball Player',
		foods: ['American', 'English'],
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
		backgroundColor: 'red', //COLORS.lightGray,
	},
	cards: {
		flex: 1,
		marginVertical: 40,
		marginHorizontal: 20,
	},
});
