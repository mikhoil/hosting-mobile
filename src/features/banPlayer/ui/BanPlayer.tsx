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
import { Ban } from '@tamagui/lucide-icons'
import { Text } from 'react-native'
import { useBanPlayerMutation } from '../queries'

export function BanPlayer({ playerNickname }: { playerNickname: string }) {
	const banPlayerMutation = useBanPlayerMutation()

	const handleBanPlayer = () => {
		banPlayerMutation.mutateAsync(playerNickname)
	}

	return (
		<AlertDialog native>
			<AlertDialogTrigger asChild="except-style">
				<Button variant="ghost" size="icon">
					<Ban color={'red'} />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent backgroundColor={'$blue10Dark'} asChild="except-style">
				<AlertDialogTitle color={'red'}>Вы уверены?</AlertDialogTitle>
				<AlertDialogDescription asChild="except-style" backgroundColor={'$blue11Dark'}>
					<Text>Вы собираетесь забанить игрока {playerNickname} на вашем сервере.</Text>
				</AlertDialogDescription>
				<AlertDialogCancel>Отменить</AlertDialogCancel>
				<AlertDialogAction onPress={handleBanPlayer}>Забанить</AlertDialogAction>
			</AlertDialogContent>
		</AlertDialog>
	)
}
