import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../constants/Colors';

function DefaultButton({ children, onPress }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
				onPress={onPress}>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default DefaultButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		backgroundColor: Colors.primary500,
		padding: 5,
		margin: 10,
		borderRadius: 5,
	},
	buttonInnerContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	buttonText: {
		fontSize: 20,
		color: '#fff',
	},
});
