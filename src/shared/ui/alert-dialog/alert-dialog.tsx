import * as React from 'react'
import { Text } from 'react-native'
import { ActionBar, ButtonProps, Dialog } from 'react-native-ui-lib'

const AlertDialog = React.forwardRef<
	React.ElementRef<typeof Dialog>,
	React.ComponentPropsWithoutRef<typeof Dialog> & {
		title: string
		subTitle?: string
		actions: ButtonProps[]
		backgroundColor?: string
		color?: string
	}
>(
	(
		{
			title,
			subTitle,
			actions,
			children,
			backgroundColor = '#171C17',
			color = '#ffffff',
			...props
		},
		ref
	) => (
		<Dialog
			ref={ref}
			panDirection="left"
			containerStyle={{
				backgroundColor,
				borderRadius: 10,
				paddingTop: 10,
				paddingHorizontal: 10,
			}}
			{...props}
		>
			<Text style={{ color, textAlign: 'center', fontSize: 20, marginBottom: 5 }}>{title}</Text>
			<Text style={{ color, fontSize: 16 }}>{subTitle}</Text>
			{children}
			<ActionBar keepRelative actions={actions} backgroundColor={backgroundColor} />
		</Dialog>
	)
)

export { AlertDialog }

