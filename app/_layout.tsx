import { MainProvider } from '@/app-flat/providers/MainProvider'
import { useAuth } from '@/entities/auth'
import { Rubik_300Light } from '@expo-google-fonts/rubik'
import { useFonts } from 'expo-font'
import { Stack, useRouter } from 'expo-router'
import { withExpoSnack } from 'nativewind'
import { useEffect } from 'react'
import { TamaguiProvider } from 'tamagui'
import appConfig from 'tamagui.config'

export { ErrorBoundary } from 'expo-router'

function RootLayout() {
	const [fontsLoaded, fontError] = useFonts({ Rubik_300Light })

	if (!fontsLoaded && !fontError) {
		return null
	}

	return (
		<MainProvider>
			<TamaguiProvider config={appConfig}>
				<InitialLayout />
			</TamaguiProvider>
		</MainProvider>
	)
}

function InitialLayout() {
	const { authToken } = useAuth()
	const router = useRouter()

	useEffect(() => {
		router.replace(authToken ? '/servers' : '/(auth)/signIn')
	}, [authToken])

	return <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }} />
}

export default withExpoSnack(RootLayout)