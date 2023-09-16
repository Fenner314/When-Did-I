import React from 'react'
import { Touchable, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { COLORS } from '../../constants/theme'
import Event from './Event/Event'

const events = [
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
	{
		icon: null,
		color: 'red',
		title: 'Get a haircut?',
		date: 'Sep 15, 2023',
		reminder: null,
		index: 1,
	},
]

const EventList = () => {
	return (
		<View style={{ rowGap: 8, marginBottom: 24 }}>
			{events.map((event, index) => (
				<Event event={event} key={index} />
			))}
		</View>
	)
}

export default EventList
