// Libraries
import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
	StatusBar
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import COLORS from '../styles/colors';

class ConnectionsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Connections',
			headerRight: (
				<MaterialCommunityIcon
					color={COLORS.black}
					size={32}
					name="calendar"
					onPress={() => navigation.navigate('UpcomingDates')}
				/>
			)
		};
	};

	componentDidMount() {
		// TODO: navigate to home or auth routes
	}

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<View style={styles.container}>
						<Text>Connection screen</Text>

						<Button
							title="Sample Message"
							onPress={() => this.props.navigation.navigate('Messaging')}
						/>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default ConnectionsScreen;

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
