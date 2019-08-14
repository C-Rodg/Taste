// Libraries
import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	TouchableOpacity
} from 'react-native';

// Components
import HeaderButton from '../components/HeaderButton';

class EditProfileScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Edit Profile',
		headerLeft: (
			<HeaderButton onHeaderButtonPress={() => navigation.goBack(null)}>
				Cancel
			</HeaderButton>
		),
		headerLeftContainerStyle: {
			paddingLeft: 12
		},
		headerRightContainerStyle: {
			paddingRight: 12
		},
		headerRight: (
			<HeaderButton
				onHeaderButtonPress={navigation.getParam('saveProfileEdits')}
			>
				Done
			</HeaderButton>
		)
	});
	componentDidMount() {
		// Allow for interaction with the header save button
		this.props.navigation.setParams({
			saveProfileEdits: this._saveProfileEdits
		});
	}

	_saveProfileEdits = () => {
		console.log('SAVING PROFILE!!!!');
	};

	render() {
		return (
			<Fragment>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<View style={styles.container}>
						<Text>Edit profile here..</Text>
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default EditProfileScreen;

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
