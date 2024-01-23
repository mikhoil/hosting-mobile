import { ServerPropertyType } from '@/shared/types'
import { Button } from '@/shared/ui/button'

import { Input } from '@/shared/ui/input'
import { Switch } from '@/shared/ui/switch'

import { ServerHeader } from '@/widgets/serverHeader'
import { FlatList, NativeSyntheticEvent, Text, TextInputChangeEventData, View } from 'react-native'
import { useServerSettings } from '../hooks'

export function ServerSettings() {
	const { localSettings, isSettingsChanged, functions } = useServerSettings()

	const { handleSwitchChange, handleTextChange, handleNumberChange, handleSaveSettings } = functions

	return (
		<View style={{ display: 'flex', padding: 12, rowGap: 10 }}>
			<ServerHeader />
			<FlatList
				ListHeaderComponent={
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<Text style={{ color: '#ffffff', fontSize: 18 }}>Настройки сервера</Text>
						{isSettingsChanged && (
							<Button
								variant="primary"
								size="sm"
								style={{ position: 'fixed', borderRadius: 10 }}
								onPress={handleSaveSettings}
							>
								<Text>Сохранить</Text>
							</Button>
						)}
					</View>
				}
				contentContainerStyle={{ display: 'flex', rowGap: 10, paddingBottom: 100 }}
				ListEmptyComponent={<></>}
				data={localSettings}
				renderItem={({ item: property }) => (
					<View
						key={property.name}
						style={{
							borderRadius: 10,
							borderColor: '#000',
							borderStyle: 'solid',
							borderWidth: 1,
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								backgroundColor: '#27272A',
								paddingHorizontal: 10,
								paddingVertical: 8,
								borderTopLeftRadius: 10,
								borderTopRightRadius: 10,
							}}
						>
							<Text style={{ color: '#ffffff', fontSize: 16 }}>{property.label}</Text>
							{property.type === ServerPropertyType.Boolean && (
								<Switch
									value={property.value === 'true'}
									onValueChange={(value) => handleSwitchChange(value, property.name)}
								/>
							)}
							{property.type === ServerPropertyType.Number && (
								<Input
									value={property.value}
									style={{
										backgroundColor: '#3D3D42',
										borderRadius: 10,
										color: '#ffffff',
										maxWidth: 'auto',
										paddingHorizontal: 5,
										textAlign: 'center',
									}}
									onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
										handleNumberChange(e, property.name)
									}
									verticalAlign="top"
									inputMode="numeric"
								/>
							)}
							{property.type === ServerPropertyType.String && (
								<Input
									value={property.value}
									style={{
										backgroundColor: '#3D3D42',
										borderRadius: 10,
										color: '#ffffff',
										paddingHorizontal: 5,
									}}
									onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
										handleTextChange(e, property.name)
									}
								/>
							)}
						</View>
						<View
							style={{
								backgroundColor: '#1C201D',
								paddingHorizontal: 10,
								paddingVertical: 4,
								borderBottomLeftRadius: 10,
								borderBottomRightRadius: 10,
							}}
						>
							<Text style={{ color: '#ffffff' }}>
								{property.name}={property.value}
							</Text>
						</View>
					</View>
				)}
			/>
		</View>
	)
}
