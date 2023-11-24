import { Stack } from 'expo-router'

export default function PlayersLayout() {
	return (
		<Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#232923' } }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="whitelist" />
			<Stack.Screen name="operators" />
			<Stack.Screen name="banned-players" />
			<Stack.Screen name="banned-ips" />
		</Stack>
	)
}
