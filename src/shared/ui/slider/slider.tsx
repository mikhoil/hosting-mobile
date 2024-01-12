// import * as SliderPrimitive from '@tamagui/slider'
import React from 'react'

import { Slider } from 'react-native-ui-lib'

// import { cn } from '@/shared/lib/utils'

// const Slider = React.forwardRef<
// 	React.ElementRef<typeof SliderPrimitive.Slider>,
// 	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Slider>
// >(({ className, ...props }, ref) => {
// 	return (
// 		<SliderPrimitive.Slider
// 			ref={ref}
// 			className={cn('relative flex w-full touch-none select-none items-center', className)}
// 			{...props}
// 		>
// 			<SliderPrimitive.Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[#f4f4f5]">
// 				<SliderPrimitive.Slider.TrackActive className="absolute h-full bg-[#16a34a]" />
// 			</SliderPrimitive.Slider.Track>
// 			<SliderPrimitive.Slider.Thumb
// 				index={0}
// 				className="block h-5 w-5 rounded-full border-2 border-[#16a34a] bg-[#16a34a] ring-offset-[#ffffff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
// 			/>
// 		</SliderPrimitive.Slider>
// 	)
// })
// Slider.displayName = SliderPrimitive.Slider.displayName

// export { Slider }

const SliderBar = React.forwardRef<
	React.ElementRef<typeof Slider>,
	React.ComponentPropsWithoutRef<typeof Slider>
>((props, ref) => <Slider ref={ref} {...props} />)

export { Slider }
