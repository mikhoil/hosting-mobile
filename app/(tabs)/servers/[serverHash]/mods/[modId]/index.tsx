import { ModDescription } from '@/screens/mod-description'
import { ModFiles } from '@/screens/mod-files'
import { ModImages } from '@/screens/mod-images'
import { useSearchParams } from '@/shared/hooks/useSearchParams'
import { TabController } from 'react-native-ui-lib'

export default function Mod() {
	const { modId } = useSearchParams()

	return (
		<TabController
			items={[
				{
					label: 'Описание',
				},
				{ label: 'Изображения' },
				{
					label: 'Файлы',
				},
			]}
		>
			<TabController.TabBar
				backgroundColor="#232923"
				selectedLabelColor="#16a34a"
				labelColor="#ffffff"
				indicatorStyle={{ display: 'none' }}
				enableShadow
			/>
			<TabController.TabPage index={0}>
				<ModDescription modId={+modId} />
			</TabController.TabPage>
			<TabController.TabPage index={1}>
				<ModImages modId={+modId} />
			</TabController.TabPage>
			<TabController.TabPage index={2}>
				<ModFiles modId={+modId} />
			</TabController.TabPage>
		</TabController>
	)
}
