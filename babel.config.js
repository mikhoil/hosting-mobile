module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'expo-router/babel',
			'nativewind/babel',
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
			'react-native-reanimated/plugin',
		],
	}
}
