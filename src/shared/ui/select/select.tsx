// import { cn } from '@/shared/lib/utils'

// const Select = SelectPrimitive.Select

// const SelectGroup = SelectPrimitive.Select.Group

// const SelectValue = SelectPrimitive.Select.Value

// const SelectTrigger = React.forwardRef<
// 	React.ElementRef<typeof Select.Trigger>,
// 	React.ComponentPropsWithoutRef<typeof Select.Trigger>
// >(({ className, children, ...props }, ref) => (
// 	<Select.Trigger
// 		ref={ref}
// 		className={cn(
// 			'flex h-10 w-full z-select items-center justify-between rounded-layout ring-2 ring-border ring-offset-0 data-[state=open]:ring-2 data-[state=open]:ring-ring [&>svg]:data-[state=open]:-rotate-180 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
// 			className
// 		)}
// 		{...props}
// 	>
// 		{children}
// 		<Select.Icon asChild>
// 			<ChevronDown size={16} className="opacity-50 transition-transform duration-200" />
// 		</Select.Icon>
// 	</Select.Trigger>
// ))
// SelectTrigger.displayName = Select.Trigger.displayName

// const SelectContent = React.forwardRef<
// 	React.ElementRef<typeof Select.Viewport>,
// 	React.ComponentPropsWithoutRef<typeof Select.Viewport>
// >(({ className, children, ...props }, ref) => (
// 	<Select.Content>
// 		<Select.Viewport
// 			className={cn(
// 				'relative z-select min-w-[8rem] overflow-hidden rounded-layout ring-2 ring-border ring-offset-0 data-[state=open]:ring-2 data-[state=open]:ring-ring bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 shadow-md',
// 				className
// 			)}
// 			ref={ref}
// 			{...props}
// 		>
// 			{children}
// 		</Select.Viewport>
// 	</Select.Content>
// ))
// SelectContent.displayName = Select.Content.name

// const SelectLabel = React.forwardRef<
// 	React.ElementRef<typeof Select.Label>,
// 	React.ComponentPropsWithoutRef<typeof Select.Label>
// >(({ className, ...props }, ref) => (
// 	<Select.Label
// 		ref={ref}
// 		className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
// 		{...props}
// 	/>
// ))
// SelectLabel.displayName = Select.Label.displayName

// const SelectItem = React.forwardRef<
// 	React.ElementRef<typeof Select.Item>,
// 	React.ComponentPropsWithoutRef<typeof Select.Item>
// >(({ className, children, ...props }, ref) => (
// 	<Select.Item
// 		ref={ref}
// 		className={cn(
// 			'relative flex w-full cursor-default select-none items-center rounded-layout py-1.5 px-4 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
// 			className
// 		)}
// 		{...props}
// 	>
// 		<Select.ItemText>{children}</Select.ItemText>
// 	</Select.Item>
// ))
// SelectItem.displayName = Select.Item.displayName

// const SelectSeparator = React.forwardRef<
// 	React.ElementRef<typeof SelectPrimitive.SelectSeparator>,
// 	React.ComponentPropsWithoutRef<typeof SelectPrimitive.SelectSeparator>
// >(({ className, ...props }, ref) => (
// 	<SelectPrimitive.SelectSeparator
// 		ref={ref}
// 		className={cn('-mx-1 my-1 h-px bg-muted', className)}
// 		{...props}
// 	/>
// ))
// SelectSeparator.displayName = SelectPrimitive.SelectSeparator.displayName

// export {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectLabel,
// 	SelectSeparator,
// 	SelectTrigger,
// 	SelectValue,
// }
import * as React from 'react'
import { Picker } from 'react-native-ui-lib'

const Select = React.forwardRef<
	React.ElementRef<typeof Picker>,
	React.ComponentPropsWithoutRef<typeof Picker>
>(({ items }) => (
	<Picker>
		{items?.map((item) => (
			<Picker.Item
				key={item.value}
				label={item.label}
				value={item.value}
				disabled={item.disabled}
			/>
		))}
	</Picker>
))

export { Select }
