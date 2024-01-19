import { Input } from '@/shared/ui/input'

import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'
import { IServerConsoleLineType } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { useStore } from 'effector-react'
import { CornerDownLeft } from 'lucide-react-native'
import { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useServerConsole } from '../hooks'
import { useFetchServerConsole } from '../queries'

export function ServerConsole() {
	const { inputRef, linesRef, inputValue, functions } = useServerConsole()
	const { handleInput, clearInput, handleSend } = functions

	const serverHash = useStore($serverHash)
	const { data: server } = useFetchServer(serverHash)
	const { data: serverConsole, isLoading } = useFetchServerConsole()

	useEffect(() => {
		linesRef?.current?.scrollToEnd({ animated: true })
	}, [serverConsole])

	if (!server || isLoading) return <></>

	if (!serverConsole || !server.isOnline)
		return (
			<View>
				<Text style={{ color: '#ffffff' }}>Здесь пока пусто</Text>
				<Text style={{ color: '#ffffff' }}>Запустите сервер для просмотра логов</Text>
			</View>
		)

	return (
		<View style={{ display: 'flex', padding: 12, rowGap: 12, paddingBottom: 100 }}>
			{!serverConsole || !server.isOnline ? (
				<View>
					<Text style={{ color: '#ffffff' }}>Здесь пока пусто</Text>
					<Text style={{ color: '#ffffff' }}>Запустите сервер для просмотра логов</Text>
				</View>
			) : (
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
							style={{ maxHeight: 500 }}
							ListEmptyComponent={
								<View style={{ padding: 4 }}>
									<Text style={{ color: '#ffffff' }}>Здесь пока пусто</Text>
									<Text style={{ color: '#ffffff' }}>Запустите сервер для просмотра логов</Text>
								</View>
							}
							data={serverConsole}
							renderItem={({ item: line }) => (
								<View key={`${line.id}`}>
									<Text
										style={{
											backgroundColor:
												line!.Record.indexOf(IServerConsoleLineType.Error) !== -1
													? '#7F1D1D'
													: line!.Record.indexOf(IServerConsoleLineType.Warning) !== -1
													? '#C68D2A'
													: 'inherit',
											color: '#ffffff',
										}}
									>
										{line!.Record}
									</Text>
								</View>
							)}
						/>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								marginBottom: 4,
								marginTop: 20,
							}}
						>
							<Input
								style={{
									borderTopLeftRadius: 6,
									borderBottomLeftRadius: 6,
									fontSize: 18,
									height: 40,
									backgroundColor: '#4d4d4d',
									color: '#ffffff',
									paddingHorizontal: 10,
									flex: 1,
								}}
								placeholderTextColor={'#cccccc'}
								ref={inputRef}
								placeholder="Введите команду..."
								value={inputValue}
								onChange={handleInput}
							/>
							<Button
								variant="primary"
								size="sm"
								style={{ borderTopRightRadius: 6, borderBottomRightRadius: 6, height: 40 }}
								onPress={() => {
									handleSend(inputValue)
									clearInput()
								}}
							>
								<CornerDownLeft color="#000" />
							</Button>
						</View>
					</View>
				</View>
			)}
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
