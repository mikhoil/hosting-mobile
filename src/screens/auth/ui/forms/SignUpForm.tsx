import { useAuth } from '@/entities/auth'
import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Href, useRouter } from 'expo-router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
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
		console.log(data)
		const success = await signUp(data)

		if (success) {
			reset()

			router.replace(ServerUrls.servers() as Href<string>)
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
					<Input
						textAlign="center"
						style={{
							textAlign: 'center',
							backgroundColor: '#4d4d4d',
							borderRadius: 20,
							color: '#ffffff',
						}}
						placeholderTextColor={'#cccccc'}
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
						inputMode="text"
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
					<Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Зарегистрироваться</Text>
				</Button>
				<Button
					variant="secondary"
					size="icon"
					style={{ width: 90, borderRadius: 10 }}
					onPress={() => router.push('/signIn')}
				>
					<Text>Вход</Text>
				</Button>
			</View>
		</View>
	)
}
