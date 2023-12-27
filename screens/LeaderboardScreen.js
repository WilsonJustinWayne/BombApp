import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { USERS } from '../data/dummy-data';
import UserRow from '../components/UserRow';

function renderCategoryItem(itemData) {
	return (
		<UserRow
			username={itemData.item.username}
			bestTime={itemData.item.bestTime}></UserRow>
	);
}
function Leaderboard() {
	return (
		<SafeAreaView>
			<FlatList
				renderItem={renderCategoryItem}
				data={USERS}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	);
}
export default Leaderboard;

const styles = StyleSheet.create({});
