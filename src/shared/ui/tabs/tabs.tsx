// import * as TabsPrimitive from '@tamagui/tabs'
// import * as React from 'react'

// import { cn } from '@/shared/lib/utils'

// const Tabs = TabsPrimitive.Tabs

// const TabsList = React.forwardRef<
// 	React.ElementRef<typeof Tabs.List>,
// 	React.ComponentPropsWithoutRef<typeof Tabs.List>
// >(({ className, ...props }, ref) => (
// 	<Tabs.List
// 		ref={ref}
// 		className={cn(
// 			'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
// 			className
// 		)}
// 		{...props}
// 	/>
// ))
// TabsList.displayName = Tabs.List.displayName

// const TabsTrigger = React.forwardRef<
// 	React.ElementRef<typeof Tabs.Tab>,
// 	React.ComponentPropsWithoutRef<typeof Tabs.Tab>
// >(({ className, ...props }, ref) => (
// 	<Tabs.Tab
// 		ref={ref}
// 		className={cn(
// 			'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-input data-[state=active]:text-foreground data-[state=active]:shadow-sm',
// 			className
// 		)}
// 		{...props}
// 	/>
// ))
// TabsTrigger.displayName = Tabs.Tab.displayName

// const TabsContent = React.forwardRef<
// 	React.ElementRef<typeof Tabs.Content>,
// 	TabsPrimitive.TabsContentProps
// >(({ className, ...props }, ref) => (
// 	<Tabs.Content
// 		ref={ref}
// 		className={cn(
// 			'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
// 			className
// 		)}
// 		{...props}
// 	/>
// ))
// TabsContent.displayName = Tabs.Content.displayName

// export { Tabs, TabsContent, TabsList, TabsTrigger }
