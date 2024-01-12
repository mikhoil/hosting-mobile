import { Link } from 'expo-router'
import { View } from 'react-native'
import { SignInForm } from './forms/SignInForm'

export function SignInScreen() {
	return (
		<View>
			<SignInForm />
			<Link href={'/signUp'}>Регистрация</Link>
		</View>
	)
}
