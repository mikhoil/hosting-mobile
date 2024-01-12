import { useAuth } from '@/entities/auth'
import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Href, useRouter } from 'expo-router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'
import { SignUpFields, signUpFormSchema } from '../../types'

export function SignUpForm() {
	const router = useRouter()

	const { signUp } = useAuth()

	const { handleSubmit, control, reset } = useForm<SignUpFields>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: { login: '', password: '', email: '' },
		mode: 'onChange',
	})

	const onFormSubmit: SubmitHandler<SignUpFields> = async (data) => {
		const success = await signUp(data)

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
						inputMode="text"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
					/>
				)}
			/>
			<Controller
				control={control}
				name="email"
				render={({ field: { onBlur, onChange, value } }) => (
					<TextInput
						placeholder="Почта"
						inputMode="email"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
					/>
				)}
			/>
			<Controller
				control={control}
				name="password"
				render={({ field: { value, onChange, onBlur } }) => (
					<TextInput
						placeholder="Пароль"
						secureTextEntry
						inputMode="text"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
					/>
				)}
			/>
			<Button variant="primary" onPress={handleSubmit(onFormSubmit)}>
				<Text>Зарегистрироваться</Text>
			</Button>
		</View>
	)
}
