import * as DialogPrimitive from '@tamagui/dialog'
import { X } from '@tamagui/lucide-icons'
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

const Dialog = DialogPrimitive.Dialog

const DialogTrigger = DialogPrimitive.DialogTrigger

const DialogPortal = ({ className, ...props }: DialogPrimitive.DialogPortalProps) => (
	<DialogPrimitive.DialogPortal className={cn(className)} {...props} />
)
DialogPortal.displayName = DialogPrimitive.DialogPortal.displayName

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.DialogOverlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.DialogOverlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.DialogOverlay
		ref={ref}
		className={cn(
			'fixed inset-0 z-modal-overlay bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
	/>
))
DialogOverlay.displayName = DialogPrimitive.DialogOverlay.displayName

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.DialogContent>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.DialogContent> & { hideClose?: boolean }
>(({ className, children, hideClose = false, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.DialogContent
			ref={ref}
			className={cn(
				'fixed left-[50%] top-[50%] z-modal grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-border bg-card p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] xs:rounded-layout md:w-full',
				className
			)}
			{...props}
		>
			{children}
			{!hideClose && (
				<DialogPrimitive.DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
					<X size={20} />
					<span className="sr-only">Закрыть</span>
				</DialogPrimitive.DialogClose>
			)}
		</DialogPrimitive.DialogContent>
	</DialogPortal>
))
DialogContent.displayName = DialogPrimitive.DialogContent.displayName

// const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
// 	<div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
// )
// DialogHeader.displayName = 'DialogHeader'

// const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
// 	<div
// 		className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
// 		{...props}
// 	/>
// )
// DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.DialogTitle>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.DialogTitle>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.DialogTitle
		ref={ref}
		className={cn('text-xl font-semibold leading-none', className)}
		{...props}
	/>
))
DialogTitle.displayName = DialogPrimitive.DialogTitle.displayName

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.DialogDescription>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.DialogDescription>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.DialogDescription
		ref={ref}
		className={cn('text-sm text-muted-foreground', className)}
		{...props}
	/>
))
DialogDescription.displayName = DialogPrimitive.DialogDescription.displayName

export {
	Dialog,
	DialogContent,
	DialogDescription,
	// DialogFooter,
	// DialogHeader,
	DialogTitle,
	DialogTrigger,
}
