import { View, Text, StyleSheet, Alert } from 'react-native';
import DefaultButton from '../components/DefaultButton';
import { useLayoutEffect, useEffect, useState } from 'react';
import Bomb from '../components/Bomb';

function generateRandomBetween() {
	return Math.floor(Math.random() * (10 - 2)) + 2;
}

function BombView({ navigation, onGameOver }) {
	const bombTime = generateRandomBetween();
	const [bombFuse, setBombFuse] = useState(bombTime * 1000);
	const [bombExploded, setBombExploded] = useState(false);
	let interval;

	function gameOverHandler() {
		// generate modal to show summary screen with button that takes you to home or leaderboard
		alert('you failed to defuse the bomb in time dumbass');
		navigation.navigate('Main');
	}

	// gameOver
	useEffect(() => {
		if (bombFuse < 0) {
			setBombExploded(true);
			gameOverHandler();
		}
	}, [bombFuse, gameOverHandler]);

	// countdown timer
	useLayoutEffect(() => {
		interval = setInterval(() => {
			setBombFuse(prev => {
				if (prev > -0.3) {
					return prev - 5;
				} else {
					clearInterval(interval);
					return 0;
				}
			});
		}, 1);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const seconds = Math.floor(bombFuse / 1000);
	let remainingMilliseconds = bombFuse % 1000;

	function defuseBomb() {
		alert('Bomb Defused');
		clearInterval(interval);
		navigation.navigate('Main');
	}

	return (
		<View style={styles.container}>
			<Bomb bombExploded={bombExploded}>
				{seconds}:{remainingMilliseconds.toString().substring(0, 2)}
			</Bomb>
			<DefaultButton onPress={defuseBomb}>Defuse</DefaultButton>
		</View>
	);
}

export default BombView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	bomb: {
		fontSize: 40,
		marginTop: 160,
	},
	timer: {
		fontSize: 20,
		marginBottom: 160,
	},
});
