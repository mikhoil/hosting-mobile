import React, { useState } from 'react'
import { View } from 'react-native'

import { Hint } from 'react-native-ui-lib'

const Popover = React.forwardRef<
	React.ElementRef<typeof Hint>,
	React.ComponentPropsWithoutRef<typeof Hint>
>(({ children, ...props }, ref) => {
	const [visible, setVisible] = useState(false)

	return (
		<Hint
			ref={ref}
			visible={visible}
			onBackgroundPress={() => setVisible(false)}
			onPress={() => setVisible((v) => !v)}
			removePaddings
			borderRadius={10}
			{...props}
		>
			<View onTouchStart={() => setVisible((v) => !v)}>{children}</View>
		</Hint>
	)
})

export { Popover }
