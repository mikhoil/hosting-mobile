import { ServerHeader } from '@/widgets/serverHeader/ui/ServerHeader'
import { Stack } from 'expo-router'

export default function ServerLayout() {
	return (
		<Stack
			screenOptions={{
				header: ServerHeader,
				contentStyle: { backgroundColor: '#232923', padding: 10, display: 'flex', rowGap: 10 },
			}}
		>
			<Stack.Screen name="index" options={{}} />
		</Stack>
	)
}
