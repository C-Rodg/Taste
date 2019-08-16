// Libraries
import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import COLORS from '../styles/colors';

class MessagingScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'PERSONS_NAME',
		headerLeftContainerStyle: {
			paddingLeft: 5
		},
		headerLeft: (
			<MaterialCommunityIcon
				size={32}
				color={COLORS.black}
				name="arrow-left"
				onPress={() => navigation.goBack(null)}
			/>
		)
	});
	componentDidMount() {
		// TODO: navigate to home or auth routes
	}

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<View style={styles.container}>
						<Text>Messaging stuff..</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default MessagingScreen;

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
