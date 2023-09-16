import { StyleSheet } from 'react-native'
import { COLORS } from '../constants/theme'

const styles = StyleSheet.create({
	appContainer: { flex: 1, backgroundColor: COLORS.white },
	title: { fontSize: 36, fontFamily: 'DMBold' },
	addButton: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 48,
		backgroundColor: '#21b44a',
		borderRadius: 8,
	},
	footer: {
		// position: 'absolute',
		// bottom: 0,
		// width: '100%',
		// background: COLORS.lightWhite,
	},
})

export default styles
