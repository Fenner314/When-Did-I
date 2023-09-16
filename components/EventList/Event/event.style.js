import { StyleSheet } from 'react-native'
import { COLORS } from '../../../constants/theme'

const styles = StyleSheet.create({
	container: {
		padding: 16,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 12,
		backgroundColor: COLORS.lightWhite,
	},
	infoContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	infoInner: {
		marginLeft: 16,
	},
	identifier: {
		width: 36,
		height: 36,
		backgroundColor: 'red',
		borderRadius: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	when: {
		fontSize: 16,
	},
})

export default styles
