import { useAuth } from '@/entities/auth'
import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Href, useRouter } from 'expo-router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'
import { SignInFields, signInFormSchema } from '../../types'

export function SignInForm() {
	const router = useRouter()

	const { signIn } = useAuth()

	const { handleSubmit, control, reset } = useForm<SignInFields>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: { login: '', password: '' },
		mode: 'onChange',
	})

	const onFormSubmit: SubmitHandler<SignInFields> = async (data) => {
		const success = await signIn(data)

		if (success) {
			reset()

			router.push(ServerUrls.servers() as Href<string>)
		}
	}

	return (
		<View>
			<Controller
				control={control}
				name="login"
				render={({ field: { onBlur, onChange, value } }) => (
					<TextInput
						placeholder="Имя пользователя"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
					/>
				)}
			/>
			<Controller
				control={control}
				name="password"
				render={({ field: { value, onBlur, onChange } }) => (
					<TextInput
						placeholder="Пароль"
						secureTextEntry
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
					/>
				)}
			/>
			<Button variant="primary" onPress={handleSubmit(onFormSubmit)}>
				<Text>Войти</Text>
			</Button>
		</View>
	)
}
