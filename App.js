import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from './constants/Colors';
import MainScreen from './screens/MainScreen';
import BombScreen from './screens/BombScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';

export default function App() {
	const Stack = createNativeStackNavigator();
	// App.js

	return (
		<>
			<StatusBar style='auto' />
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Main'>
					<Stack.Screen
						name='Main'
						component={MainScreen}
					/>
					<Stack.Screen
						name='Bomb'
						component={BombScreen}
						options={{
							title: 'Bombs',
							headerBackVisible: false,
							headerBackTitleVisible: false,
						}}
					/>
					<Stack.Screen
						name='Leaderboard'
						component={LeaderboardScreen}
						options={{
							title: 'Leaderboards',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.accent500,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
