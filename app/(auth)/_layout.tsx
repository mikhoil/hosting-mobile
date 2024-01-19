import { Stack } from 'expo-router'

export default function AuthLayout() {
	return (
		<Stack
			screenOptions={{
				contentStyle: { backgroundColor: '#232923' },
				headerTitleAlign: 'center',
				headerTitleStyle: { color: '#ffffff' },
				headerStyle: { backgroundColor: '#171C17' },
			}}
		>
			<Stack.Screen
				name="signIn"
				options={{
					headerTitle: 'Вход',
					contentStyle: {
						display: 'flex',
						justifyContent: 'center',
						backgroundColor: '#232923',
					},
				}}
			/>
			<Stack.Screen
				name="signUp"
				options={{
					headerTitle: 'Регистрация',
					contentStyle: {
						display: 'flex',
						justifyContent: 'center',
						backgroundColor: '#232923',
					},
				}}
			/>
		</Stack>
	)
}
