import { ServerUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Href, useRouter } from 'expo-router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { createServer } from '../api'

export function CreateServer() {
	const router = useRouter()
	const { control, handleSubmit, reset } = useForm<{ name: string }>()

	const onSubmit: SubmitHandler<{ name: string }> = async ({ name }) => {
		const { data } = await createServer({ name })
		if (data.success) {
			router.push(ServerUrls.servers() as Href<string>)
			reset()
		} else console.log('error')
	}

	return (
		<View style={{ display: 'flex', rowGap: 20 }}>
			<Controller
				control={control}
				name="name"
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
						placeholder="Название сервера"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
					/>
				)}
			/>
			<Button variant="primary" size="sm" onPress={handleSubmit(onSubmit)}>
				<Text>Создать</Text>
			</Button>
		</View>
	)
}
