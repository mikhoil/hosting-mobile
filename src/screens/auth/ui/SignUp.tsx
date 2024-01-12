import { Link } from 'expo-router'
import { View } from 'react-native'
import { SignUpForm } from './forms/SignUpForm'

export function SignUpScreen() {
	return (
		<View>
			<SignUpForm />
			<Link href={'/signIn'}>Вход</Link>
		</View>
	)
}
