import { Stack } from 'expo-router'

export default function ModLayout() {
	return (
		<Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#232923' } }}>
			<Stack.Screen name="index" />
			{/* <Stack.Screen name="images" /> */}
			{/* <Stack.Screen name="files" /> */}
		</Stack>
	)
}
