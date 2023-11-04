import { MainProvider } from '@/app-flat/providers/MainProvider'
import { Rubik_300Light } from '@expo-google-fonts/rubik'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { withExpoSnack } from 'nativewind'
import { TamaguiProvider } from 'tamagui'
import appConfig from 'tamagui.config'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync()

function RootLayout() {
	const [fontsLoaded, fontError] = useFonts({ Rubik_300Light })
	if (!fontsLoaded && !fontError) {
		return null
	}

	return (
		<MainProvider>
			<TamaguiProvider config={appConfig}>
				<Stack screenOptions={{ statusBarStyle: 'dark' }}>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
			</TamaguiProvider>
		</MainProvider>
	)
}

export default withExpoSnack(RootLayout)
