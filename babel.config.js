// process.env.TAMAGUI_TARGET = 'native'

module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'nativewind/babel',
			'expo-router/babel',
			// 'react-native-classname-to-style',
			// ['react-native-platform-specific-extensions', { extensions: ['css'] }],
			[
				'module-resolver',
				{
					root: ['.'],
					alias: {
						'@/app-flat/*': 'src/app-flat/*',
						'@/entities/*': 'src/entities/*',
						'@/features/*': 'src/features/*',
						'@/screens/*': 'src/screens/*',
						'@/shared/*': 'src/shared/*',
						'@/widgets/*': 'src/widgets/*',
					},
					extensions: ['.js', '.ts', '.jsx', '.tsx'],
				},
			],
		],
	}
}
