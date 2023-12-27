import { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
export default function Time({ time }) {
	return (
		<View style={styles.row}>
			<Text style={styles.time}>
				{transformSeconds()} :<Text> </Text>
				{transformMilliseconds()}
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	row: {
		display: 'flex',
	},
	time: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#272727',
	},
});
