// Libraries
import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
	StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

// Components
import { HeaderCalendarIcon } from '../components/NavigationItems';

// Actions
import { setConnectionsViewed } from '../redux/actions/connections';

// Testing
import { ImageSlider } from '../components/ImageSlider';
const TEST_IMAGES = [
	'https://picsum.photos/id/1/600/600',
	'https://picsum.photos/id/2/600/600',
	'https://picsum.photos/id/3/600/600',
	'https://picsum.photos/id/4/600/600',
	'https://picsum.photos/id/5/600/600',
	'https://picsum.photos/id/6/600/600',
];

class ConnectionsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Connections',
			headerRight: <HeaderCalendarIcon navigation={navigation} />,
		};
	};

	componentDidMount() {
		// Set new connections and new messages as viewed
		this.props.setConnectionsViewed();

		// TODO: navigate to home or auth routes
	}

	testClear = async () => {
		await AsyncStorage.clear();
	};

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="light-content" />
				<SafeAreaView>
					<View style={styles.container}>
						<Text>Connection screen</Text>

						<Button
							title="Sample Message"
							onPress={() => this.props.navigation.navigate('Messaging')}
						/>
						<Button onPress={this.testClear} title="Clear Storage" />
						<ImageSlider imageList={TEST_IMAGES} />
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setConnectionsViewed: () => dispatch(setConnectionsViewed()),
});

export default connect(
	null,
	mapDispatchToProps
)(ConnectionsScreen);

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
