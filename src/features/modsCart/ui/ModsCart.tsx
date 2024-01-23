import { useFetchServer } from '@/shared/queries/server'
import { ModUrls } from '@/shared/routes/urls'
import { $modsCart, $serverHash, clearModsCart, removeModFromCart } from '@/shared/store'
import { AlertDialog } from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import { useStore } from 'effector-react'
import { Image } from 'expo-image'
import { Href, Link } from 'expo-router'
import { Package, X } from 'lucide-react-native'
import { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

export function ModsCart() {
	const serverHash = useStore($serverHash)
	const modsCart = useStore($modsCart)

	const { data: server } = useFetchServer(serverHash)
	const [visible, setVisible] = useState(false)

	const handleRemoveModClick = (modId: number) => {
		removeModFromCart(modId)
	}

	const handleSubmitCart = () => {
		//api request to install mods from cart
		setVisible(false)
		clearModsCart()
	}

	const handleClearCart = () => {
		setVisible(false)
		clearModsCart()
	}

	return (
		<>
			<Button
				variant="ghost"
				onPress={() => setVisible(true)}
				style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				<Package size={16} color={'#ffffff'} />
				<Text style={{ color: '#ffffff' }}>Корзина модов</Text>
			</Button>
			<AlertDialog
				visible={visible}
				onDismiss={() => setVisible(false)}
				title={`Моды к установке на сервер ${server?.gameServerName}`}
				actions={[
					{ label: 'Сбросить', onPress: handleClearCart, color: 'red' },
					{ label: 'Установить', onPress: handleSubmitCart, color: 'green' },
				]}
			>
				<FlatList
					data={modsCart}
					ListEmptyComponent={
						<Text style={{ textAlign: 'center', color: '#ffffff' }}>Здесь пока пусто</Text>
					}
					contentContainerStyle={{
						display: 'flex',
						alignItems: 'stretch',
						rowGap: 10,
						paddingHorizontal: 20,
					}}
					renderItem={({ item: mod }) => (
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Image
								source={
									mod.logo
										? {
												uri: mod.logo.thumbnailUrl,
												headers: { Accept: 'image/*' },
										  }
										: require('/src/app-flat/assets/images/logo-green.png')
								}
								alt={`Логотип мода ${mod.name}`}
								style={{ width: 50, height: 50 }}
							/>
							<Link
								href={ModUrls.mod(serverHash!, mod.id) as Href<string>}
								style={{ color: '#c68d2a' }}
								onPress={() => setVisible(false)}
							>
								{mod.name}
							</Link>
							<Button variant="ghost" size="icon" onPress={() => handleRemoveModClick(mod.id)}>
								<X color="red" size={16} />
							</Button>
						</View>
					)}
				/>
			</AlertDialog>
		</>
	)
}
