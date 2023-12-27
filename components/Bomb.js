import { StyleSheet, Text } from 'react-native';
import Time from './Time';
import { useState } from 'react';

function Bomb({ children, bombExploded }) {
	return (
		<>
			<Text style={styles.bomb}>Bomb</Text>
			<Text style={bombExploded ? styles.timer : null}>{children}</Text>
		</>
	);
}

export default Bomb;
const styles = StyleSheet.create({
	timer: {
		hidden: true,
	},
});
