import { Input } from '@/shared/ui/input'
import { Skeleton } from '@/shared/ui/skeleton'

import { IServerConsoleLine } from '@/shared/types'
import { ServerHeader } from '@/widgets/serverHeader'
import { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useServerConsole } from '../hooks'
import { useFetchServerConsole } from '../queries'

export function ServerConsole() {
	const { inputRef, linesRef, inputValue, functions } = useServerConsole()
	const { handleInput, clearInput, handleSend } = functions

	const { data: serverConsole, isLoading } = useFetchServerConsole()

	useEffect(() => {
		linesRef?.current?.scrollToEnd({ animated: true })
	}, [serverConsole])

	if (isLoading) return <Skeleton className="w-full h-[375px]" />

	if (!serverConsole) return null

	return (
		<View style={{ display: 'flex', padding: 12, rowGap: 12, paddingBottom: 300 }}>
			<ServerHeader />
			<View
				style={{
					backgroundColor: '#171C17',
					paddingHorizontal: 4,
					borderRadius: 6,
				}}
			>
				<View
					style={{
						padding: 4,
						borderBottomColor: '#3D3D42',
						borderBottomWidth: 1,
						borderStyle: 'solid',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '500' }}>Консоль</Text>
					<Text style={{ color: '#CCCCCC', fontSize: 12, fontWeight: '400' }}>Журнал логов</Text>
				</View>
				<View>
					<FlatList
						ref={linesRef}
						style={{ maxHeight: 450 }}
						ListEmptyComponent={
							<View style={{ padding: 4 }}>
								<Text style={{ color: '#ffffff' }}>Здесь пока пусто</Text>
								<Text style={{ color: '#ffffff' }}>Запустите сервер для просмотра логов</Text>
							</View>
						}
						data={serverConsole}
						renderItem={({ item: line }) => (
							<View key={`${line.id} ${Math.random()}`}>
								<Text
									style={{ ...lineStyle[(line as IServerConsoleLine).type], color: '#ffffff' }}
								>{`[${line.time} - ${line.type}]: `}</Text>
								<Text style={{ color: '#ffffff' }}>{line.message}</Text>
							</View>
						)}
					/>
					<Input
						style={{
							fontSize: 14,
							backgroundColor: '#4d4d4d',
							borderRadius: 6,
							marginBottom: 4,
							marginTop: 20,
						}}
						placeholderTextColor={'#cccccc'}
						ref={inputRef}
						placeholder="Введите команду..."
						value={inputValue}
						onKeyPress={(e) => {
							// handle sending by press button
							if (e.nativeEvent.key === 'Enter') {
								handleSend(inputRef.current?.props.value || '')
								clearInput()
							}
						}}
						onChange={handleInput}
					/>
				</View>
			</View>
		</View>
	)
}

const lineStyle = StyleSheet.create({
	ERROR: {
		backgroundColor: '#7F1D1D',
	},
	WARNING: {
		backgroundColor: '#C68D2A',
	},
	INFO: {},
})
