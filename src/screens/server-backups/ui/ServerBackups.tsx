import { Trash2, Undo2 } from '@tamagui/lucide-icons'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

import { backups } from '@/shared/fake-data/server.data'
import { ServerHeader } from '@/widgets/serverHeader'
import { FlatList, Text, View } from 'react-native'
import { Badge } from 'react-native-ui-lib'
import { useServerBackups } from '../hooks'

export function ServerBackups() {
	const { isAutoCopy, autoCopyPeriod, backupName, functions } = useServerBackups()

	const {
		handleAutoCopyPeriodChange,
		handleBackupNameChange,
		handleCreateBackupClick,
		handleDeleteBackupClick,
		handleIsAutoCopyChange,
		handleRestoreBackupClick,
		handleSaveAutoCopyClick,
	} = functions

	return (
		<View style={{ display: 'flex', padding: 12, rowGap: 10 }}>
			<ServerHeader />
			<View>
				<Text
					style={{
						fontSize: 18,
						color: '#ffffff',
						fontWeight: '500',
					}}
				>
					Управление резервными копиями
				</Text>
				{/* <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<Text>Автосохранение</Text>
						<Switch value={isAutoCopy} onValueChange={handleIsAutoCopyChange} />
						<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
							<Text>каждые</Text>
							<Input
								inputMode="numeric"
								keyboardType="numeric"
								defaultValue={'0'}
								onChange={handleAutoCopyPeriodChange}
							/>
							<Text>дней</Text>
							<Button variant="primary" size="icon" onPress={handleSaveAutoCopyClick}>
								<Save strokeWidth={1.75} size={28} />
							</Button>
						</View>
					</View> */}
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					backgroundColor: '#171C17',
					justifyContent: 'space-between',
					borderRadius: 10,
				}}
			>
				<Input
					value={backupName}
					onChange={handleBackupNameChange}
					placeholder="Введите название резервной копии"
					placeholderTextColor={'#686F6E'}
				/>
				<Button
					variant="primary"
					onPress={handleCreateBackupClick}
					size="sm"
					style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
				>
					<Text>Создать бекап</Text>
				</Button>
			</View>
			<Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '500' }}>
				Доступные резервные копии
			</Text>
			<FlatList
				contentContainerStyle={{ display: 'flex', rowGap: 8 }}
				data={backups}
				renderItem={({ item: backup }) => (
					<View
						key={backup.id}
						style={{
							display: 'flex',
							rowGap: 4,
							backgroundColor: '#171C17',
							paddingHorizontal: 10,
							paddingVertical: 4,
							borderRadius: 5,
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Text style={{ color: '#ffffff', fontSize: 14, fontWeight: '400' }}>
								{backup.name}
							</Text>
							<Text style={{ color: '#686F6E', fontWeight: '400', fontSize: 11 }}>
								{backup.datetime}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<View style={{ display: 'flex', flexDirection: 'row', columnGap: 6 }}>
								<Badge
									label={backup.author}
									backgroundColor="#27272A"
									labelStyle={{
										fontWeight: '400',
										fontSize: 10,
										color: '#cccccc',
									}}
								/>
								<Badge
									label={`${backup.size} MB`}
									backgroundColor="#27272A"
									labelStyle={{
										fontWeight: '400',
										fontSize: 10,
										color: '#cccccc',
									}}
								/>
							</View>
							<View style={{ display: 'flex', flexDirection: 'row', columnGap: 6 }}>
								<Button variant="primary" size="icon" onPress={handleRestoreBackupClick}>
									<Undo2 size={20} />
								</Button>
								<Button variant="destructive" size="icon" onPress={handleDeleteBackupClick}>
									<Trash2 size={20} color={'#ffffff'} />
								</Button>
							</View>
						</View>
					</View>
				)}
			/>
		</View>
	)
}
