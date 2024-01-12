import { AlertDialog } from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import { Trash2 } from 'lucide-react-native'
import { useState } from 'react'
import { Text } from 'react-native'

export function FileNodeRemove({ path }: { path: string }) {
	const handleRemoveNode = () => {
		console.log(`remove node by path: `, path)
	}

	const [visible, setVisible] = useState(false)

	return (
		<>
			<Button
				variant="ghost"
				onPress={() => {
					setVisible(true)
				}}
			>
				<Trash2 size={20} color={'red'} />
				<Text style={{ color: 'red' }}>Удалить</Text>
			</Button>
			<AlertDialog
				actions={[
					{ label: 'Отмена', onPress: () => setVisible(false), color: 'yellow' },
					{
						label: 'Удалить',
						onPress: () => {
							handleRemoveNode()
							setVisible(false)
						},
						color: 'red',
					},
				]}
				title="Вы уверены?"
				subTitle={`Вы собираетесь удалить папку/файл по пути: ${path}`}
				visible={visible}
				onDismiss={() => setVisible(false)}
			>
				{/* <AlertDialogTrigger asChild>
					<Button
						variant="ghost"
						className="h-auto py-1 text-lg text-foreground hover:bg-destructive hover:text-destructive-foreground flex flex-nowrap items-center gap-2"
						>

						</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
						<AlertDialogHeader>
						<AlertDialogTitle>Вы уверены?</AlertDialogTitle>
						<AlertDialogDescription className="flex flex-col gap-2">
							<span>Вы собираетесь удалить папку/файл по пути:</span>
							<span className="font-bold text-foreground">~/{path}</span>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
					<AlertDialogCancel>Отменить</AlertDialogCancel>
						<AlertDialogAction onClick={handleRemoveNode}>Удалить</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent> */}
			</AlertDialog>
		</>
	)
}
