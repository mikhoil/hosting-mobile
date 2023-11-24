import * as React from 'react'
import { ProgressBar } from 'react-native-ui-lib'

type Props = {
	value: number
	maxValue: number
}

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressBar>,
	React.ComponentPropsWithoutRef<typeof ProgressBar> & Props
>(({ value, maxValue, ...props }, ref) => (
	<ProgressBar progress={(value / maxValue) * 100} ref={ref} {...props} />
))
Progress.displayName = ProgressBar.displayName

export { Progress }
