import { Stack } from 'expo-router'

export default function ModsLayout() {
	return (
		<Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#232923' } }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="search" />
			<Stack.Screen name="[modId]" />
		</Stack>
	)
}
