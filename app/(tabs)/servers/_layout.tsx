import { Stack } from 'expo-router'

export default function ServersLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: '#232923' },
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="[serverHash]"
				options={{
					contentStyle: { backgroundColor: '#232923' },
					animation: 'fade_from_bottom',
				}}
			/>
		</Stack>
	)
}
