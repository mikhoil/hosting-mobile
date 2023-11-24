import { AlertDialog } from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import { Ban } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useBanPlayerMutation } from '../queries'

export function BanPlayer({ playerNickname }: { playerNickname: string }) {
	const banPlayerMutation = useBanPlayerMutation()

	const handleBanPlayer = () => {
		banPlayerMutation.mutateAsync(playerNickname)
	}

	const [visible, setVisible] = useState(false)

	return (
		<>
			<Button variant="ghost" size="icon" onPress={() => setVisible(true)}>
				<Ban color={'red'} />
			</Button>
			<AlertDialog
				title="Вы уверены?"
				subTitle={`Вы собираетесь забанить игрока ${playerNickname} на вашем сервера`}
				visible={visible}
				onDismiss={() => setVisible(false)}
				actions={[
					{ label: 'Отмена', onPress: () => setVisible(false), color: 'yellow' },
					{
						label: 'Забанить',
						onPress: () => {
							handleBanPlayer()
							setVisible(false)
						},
						color: 'red',
					},
				]}
			/>
		</>
	)
}
