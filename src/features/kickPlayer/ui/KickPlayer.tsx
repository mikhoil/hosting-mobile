import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import { MinusCircle } from '@tamagui/lucide-icons'
import { Text } from 'react-native'
import { useKickPlayerMutation } from '../queries'

export function KickPlayer({ playerNickname }: { playerNickname: string }) {
	const kickPlayerMutation = useKickPlayerMutation()

	const handleKickPlayer = () => {
		kickPlayerMutation.mutateAsync(playerNickname)
	}
	return (
		<AlertDialog native>
			<AlertDialogTrigger asChild="except-style">
				<Button variant="ghost" size="icon">
					<MinusCircle color={'#807D7D'} />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogTitle>Вы уверены?</AlertDialogTitle>
				<AlertDialogDescription>
					<Text>Вы собираетесь кикнуть игрока {playerNickname} с вашего сервера.</Text>
				</AlertDialogDescription>
				<AlertDialogCancel>Отменить</AlertDialogCancel>
				<AlertDialogAction onPress={() => handleKickPlayer()}>Кикнуть</AlertDialogAction>
			</AlertDialogContent>
		</AlertDialog>
	)
}
