import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { LayoutList, PlusCircle, UserCircle } from 'lucide-react-native'
import { TouchableOpacity, View } from 'react-native'

export function TabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
	const icons = [
		<LayoutList color={'#ffffff'} size={'34'} />,
		<PlusCircle color={'#ffffff'} size={'34'} />,
		<UserCircle color={'#ffffff'} size={'34'} />,
	]
	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingVertical: 8,
				paddingHorizontal: 20,
				backgroundColor: '#171C17',
			}}
		>
			{state.routes.map((route, i) => (
				<TouchableOpacity
					key={route.key}
					onPress={() => {
						if (Object.hasOwn(route.params || {}, 'serverHash') && route.name === 'servers')
							navigation.goBack()
						else navigation.navigate(route.name)
					}}
				>
					{icons[i]}
				</TouchableOpacity>
			))}
		</View>
	)
}
