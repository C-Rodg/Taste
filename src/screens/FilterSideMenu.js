import React, { Fragment } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';

const FilterSideMenu = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<View>
					<Text>Filters</Text>
					<Text>Filters</Text>
					<Text>Filters</Text>
					<Text>Filters</Text>
					<Text>Filters</Text>
					<Text>Filters</Text>
				</View>
			</SafeAreaView>
		</Fragment>
	);
};

export default FilterSideMenu;
