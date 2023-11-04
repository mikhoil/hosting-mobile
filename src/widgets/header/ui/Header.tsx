import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { Image } from 'expo-image'
import { Text, View } from 'react-native'

export function MainHeader({ layout, navigation, options, route }: BottomTabHeaderProps) {
	return (
		<View
			style={{
				backgroundColor: '#171C17',
				paddingVertical: 15,
				paddingHorizontal: 12,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<Image
				style={{ width: 32, height: 35, marginRight: -32 }}
				source={require('/src/app-flat/assets/images/logo-green.png')}
			/>
			<Text
				style={{
					color: '#ffffff',
					textAlign: 'center',
					fontSize: 20,
					fontWeight: '500',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				{options.title}
			</Text>
		</View>
	)
}
