import React from 'react'
import * as SwitchPrimitives from 'react-native-ui-lib'

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Switch>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Switch>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Switch
		{...props}
		ref={ref}
		onColor={'#16a34a'}
		offColor={'#3d3d42'}
		thumbColor={'#232923'}
	/>
))
Switch.displayName = SwitchPrimitives.Switch.displayName

export { Switch }
