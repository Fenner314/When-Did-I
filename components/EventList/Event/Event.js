import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './event.style'

const Event = ({ event }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.infoContainer}>
				<TouchableOpacity>
					{event.icon ? (
						<Icon name='ScissorOutline' />
					) : (
						<View style={styles.identifier}></View>
					)}
				</TouchableOpacity>

				<View style={styles.infoInner}>
					<Text style={styles.title}>{event.title}</Text>
					<Text style={styles.when}>{event.date}</Text>
				</View>
			</View>

			<View>
				<Text>Add a reminder</Text>
			</View>
		</TouchableOpacity>
	)
}

export default Event
