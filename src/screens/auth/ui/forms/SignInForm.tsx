import { useAuth } from '@/entities/auth'
import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Href, useRouter } from 'expo-router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
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
		<View style={{ padding: 20, display: 'flex', rowGap: 15 }}>
			<Controller
				control={control}
				name="login"
				render={({ field: { onBlur, onChange, value } }) => (
					<Input
						textAlign="center"
						style={{
							textAlign: 'center',
							backgroundColor: '#4d4d4d',
							borderRadius: 20,
							color: '#ffffff',
						}}
						placeholderTextColor={'#cccccc'}
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
					<Input
						textAlign="center"
						style={{
							textAlign: 'center',
							backgroundColor: '#4d4d4d',
							borderRadius: 20,
							color: '#ffffff',
						}}
						placeholderTextColor={'#cccccc'}
						placeholder="Пароль"
						secureTextEntry
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
					/>
				)}
			/>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Button variant="primary" size="sm" onPress={handleSubmit(onFormSubmit)}>
					<Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Войти</Text>
				</Button>
				<Button
					variant="secondary"
					size="icon"
					style={{ width: 90, borderRadius: 10 }}
					onPress={() => router.push('/signUp')}
				>
					<Text>Регистрация</Text>
				</Button>
			</View>
			<Text style={{ color: '#ffffff' }}>server url: {process.env.EXPO_PUBLIC_SERVER_URL}</Text>
		</View>
	)
}
