import { Alert, StyleSheet, Text, View } from 'react-native';
import DefaultButton from '../components/DefaultButton';
import Colors from '../constants/Colors';

function MainView({ navigation }) {
	function startGame() {
		navigation.navigate('Bomb');
	}

	function showLeaderboard() {
		navigation.navigate('Leaderboard');
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bomb App</Text>
			<DefaultButton onPress={startGame}>Play</DefaultButton>
			<DefaultButton onPress={showLeaderboard}>Leaderboard</DefaultButton>
		</View>
	);
}
export default MainView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.accent500,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 40,
		marginBottom: 40,
	},
});
