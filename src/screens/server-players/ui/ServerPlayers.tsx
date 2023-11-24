import { PlayersUnit } from '@/entities/player/ui/playersUnit'
import { ServerHeader } from '@/widgets/serverHeader'
import { LocateOff, UserCheck, UserCog, UserX } from '@tamagui/lucide-icons'
import { Text, View } from 'react-native'

export function ServerPlayers() {
	return (
		<View className="flex p-3" style={{ rowGap: 12 }}>
			<ServerHeader />
			<Text style={{ color: '#ffffff', fontSize: 18, fontWeight: '500' }}>Управление игроками</Text>
			<PlayersUnit
				icon={<UserCheck color={'#ffffff'} size={48} />}
				title="Белый список"
				description={
					'Управляйте белым списком сервера. Операторы могут присоединиться, даже если они не включены в белый список.'
				}
				route="whitelist"
			/>
			<PlayersUnit
				icon={<UserCog color={'#ffffff'} size={48} />}
				title="Операторы"
				description={
					'Наделяйте игроков статусов оператора, дав им доступ к исполнению команд для администрирования сервера'
				}
				route="operators"
			/>
			<PlayersUnit
				icon={<UserX color={'#ffffff'} size={48} />}
				title="Заблокированные игроки"
				description={
					'Управляйте списком заблокированных (чёрным списком) на сервере. Блокировка удаляет игрока из белого списка.'
				}
				route="banned-players"
			/>
			<PlayersUnit
				icon={<LocateOff color={'#ffffff'} size={48} />}
				title="Заблокированные IP-адреса"
				description={
					'Добавляйте IP-адрес игрока в чёрный список. Не сработает, если указанный IP-адрес недействителен или указанный игрок не в сети'
				}
				route="banned-ips"
			/>
		</View>
	)
}
