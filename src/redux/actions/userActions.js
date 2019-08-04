// Types
import { SET_USER_DATA } from '../types';

const mockUserData = {
	firstName: 'Tyler',
	lastName: 'Jackson',
	gender: 'Male',
	job: 'Software Engineer',
	ethnicity: 'White',
	drinking: 'Socially',
	smoking: 'Weed only',
	children: 'None',
	height: '172cm',
	weight: 'Athletic',
	lastMeal: 'Bad boy rolls from Umi Sushi',
	situation: ['Foodie Friend', 'Relationship'],
	quirks: ['Piercings'],
	drinks: ['Beer', 'Mimosas'],
	food: ['Brunch', 'Japanese', 'Mexican'],
	bio: "It's not my dog, so don't event ask"
};

export const getUserData = () => {
	console.log('GETTING USER DATA!');
	return {
		type: SET_USER_DATA,
		payload: mockUserData
	};
};
