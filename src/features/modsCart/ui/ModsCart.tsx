import { IMod } from '@/shared/api/curse-forge'
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
import { FlatList, View } from 'react-native'

export function ModsCart() {
	const serverHash = useStore($serverHash)
	const modsCart = useStore($modsCart)

	const { data: server } = useFetchServer(serverHash)
	const [visible, setVisible] = useState(false)

	const handleRemoveModClick = (mod: IMod) => {
		removeModFromCart([serverHash!, mod])
	}

	const handleSubmitCart = () => {
		//api request to install mods from cart
		setVisible(false)
		clearModsCart(serverHash!)
	}

	const handleClearCart = () => {
		setVisible(false)
		clearModsCart(serverHash!)
	}

	return (
		<>
			<Button variant="ghost" onPress={() => setVisible(true)}>
				<Package size={16} color={'#ffffff'} />
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
					data={modsCart.get(serverHash!)}
					renderItem={({ item: mod }) => (
						<View>
							<Image
								source={
									mod.logo
										? { uri: mod.logo.thumbnailUrl, headers: { Accept: 'image/*' } }
										: require('/src/app-flat/assets/images/logo-green.png')
								}
								alt={`Логотип мода ${mod.name}`}
							/>
							<Link
								href={ModUrls.mod(serverHash!, mod.id) as Href<string>}
								style={{ color: '#ffffff' }}
							>
								{mod.name}
							</Link>
							<Button variant="ghost" size="icon" onPress={() => handleRemoveModClick(mod)}>
								<X />
							</Button>
						</View>
					)}
				/>
			</AlertDialog>
		</>
	)
}
