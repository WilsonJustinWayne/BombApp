import { View, Text, Pressable } from 'react-native';
function UserRow({ username, bestTime }) {
	return (
		<View>
			<Pressable>
				<View>
					<Text>
						{username} - {bestTime}
					</Text>
				</View>
			</Pressable>
		</View>
	);
}
export default UserRow;
