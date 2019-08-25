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

// Components
import { HeaderCalendarIcon } from '../components/NavigationItems';

// Actions
import { setConnectionsViewed } from '../redux/actions/connections';

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
		justifyContent: 'center',
		alignItems: 'center',
	},
});
