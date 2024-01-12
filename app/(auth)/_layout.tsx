import { Stack } from 'expo-router'

export default function AuthLayout() {
	return (
		<Stack>
			<Stack.Screen name="signIn" options={{ headerTitle: 'Вход' }} />
			<Stack.Screen name="signUp" options={{ headerTitle: 'Регистрация' }} />
		</Stack>
	)
}
