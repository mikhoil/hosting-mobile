import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { LayoutList, PlusCircle, UserCircle } from '@tamagui/lucide-icons'
import { TouchableOpacity, View } from 'react-native'

export function TabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
	const icons = [
		<LayoutList color={'#ffffff'} size={'$3'} />,
		<PlusCircle color={'#ffffff'} size={'$3'} />,
		<UserCircle color={'#ffffff'} size={'$3'} />,
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
				<TouchableOpacity key={route.key} onPress={() => navigation.navigate(route.name)}>
					{icons[i]}
				</TouchableOpacity>
			))}
		</View>
	)
}
