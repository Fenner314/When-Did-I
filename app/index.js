import { Stack } from 'expo-router'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/theme'
import styles from './home.style'
import EventList from '../components/EventList/EventList'

const Home = () => {
	return (
		<SafeAreaView style={styles.appContainer}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.white },
					headerShadowVisible: false,
					headerRight: () => <Icon name='settings' />,
					headerLeft: () => <Text style={styles.title}>When did I...</Text>,
					headerTitle: '',
				}}
			/>
			<View style={{ padding: 16, paddingTop: 0, flex: 1 }}>
				{/* <View>
					<Text style={styles.title}>When did I...</Text>
				</View> */}
				<ScrollView showsVerticalScrollIndicator={false}>
					<View>
						<EventList />
					</View>
				</ScrollView>
				<View style={styles.footer}>
					<TouchableOpacity style={styles.addButton}>
						<Icon name='add' />
						<Text>Add</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default Home
