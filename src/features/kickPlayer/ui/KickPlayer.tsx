import { AlertDialog } from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import { MinusCircle } from 'lucide-react-native'
import { useState } from 'react'
import { useKickPlayerMutation } from '../queries'

export function KickPlayer({ playerNickname }: { playerNickname: string }) {
	const kickPlayerMutation = useKickPlayerMutation()

	const handleKickPlayer = () => {
		kickPlayerMutation.mutateAsync(playerNickname)
	}

	const [visible, setVisible] = useState(false)

	return (
		<>
			<Button variant="ghost" size="icon" onPress={() => setVisible(true)}>
				<MinusCircle color={'#807D7D'} />
			</Button>
			<AlertDialog
				actions={[
					{ label: 'Отмена', onPress: () => setVisible(false), color: 'yellow' },
					{
						label: 'Кикнуть',
						onPress: () => {
							handleKickPlayer()
							setVisible(false)
						},
						color: 'red',
					},
				]}
				title="Вы уверены?"
				subTitle={`Вы собираетесь кикнуть игрока ${playerNickname} с вашего сервера`}
				visible={visible}
				onDismiss={() => setVisible(false)}
			/>
		</>
	)
}
