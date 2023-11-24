import * as React from 'react'

import { cn } from '@/shared/lib/utils'
import { TextInput, TextInputProps } from 'react-native'

const Input = React.forwardRef<TextInput, TextInputProps>(
	({ className, inputMode = 'text', ...props }, ref) => {
		return (
			<TextInput
				inputMode={inputMode}
				className={cn(
					'flex border-[#e4e4e7] bg-[#e4e4e7] px-2 ring-offset-[#ffffff] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#71717a] focus-visible:outline-none focus-visible:border-[#16a34a] disabled:cursor-not-allowed disabled:opacity-50',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }

