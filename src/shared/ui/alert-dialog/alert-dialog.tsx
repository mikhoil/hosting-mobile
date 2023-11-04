import { cn } from '@/shared/lib/utils'
import * as AlertDialogPrimitive from '@tamagui/alert-dialog'
import * as React from 'react'
import { buttonVariants } from '../button'

const { AlertDialog, AlertDialogTrigger } = AlertDialogPrimitive

const AlertDialogPortal = ({
	className,
	...props
}: AlertDialogPrimitive.AlertDialogPortalProps) => (
	<AlertDialog.Portal className={cn(className)} {...props} />
)
AlertDialogPortal.displayName = AlertDialog.Portal.displayName

const AlertDialogOverlay = React.forwardRef<
	React.ElementRef<typeof AlertDialog.Overlay>,
	React.ComponentPropsWithoutRef<typeof AlertDialog.Overlay>
>(({ className, children, ...props }, ref) => (
	<AlertDialog.Overlay
		className={cn(
			'fixed inset-0 z-modal-overlay bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
		ref={ref}
	/>
))
AlertDialogOverlay.displayName = AlertDialog.Overlay.displayName

const AlertDialogContent = React.forwardRef<
	React.ElementRef<typeof AlertDialog.Content>,
	React.ComponentPropsWithoutRef<typeof AlertDialog.Content>
>(({ className, ...props }, ref) => (
	<AlertDialog.Portal>
		<AlertDialog.Overlay />
		<AlertDialog.Content
			ref={ref}
			className={cn(
				'fixed z-modal left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-border bg-card p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] xs:rounded-layout md:w-full',
				className
			)}
			{...props}
		/>
	</AlertDialog.Portal>
))
AlertDialogContent.displayName = AlertDialog.Content.displayName

// const AlertDialogHeader = ({ className, ...props }: AlertDialogHeader) => (
// 	<div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
// )
// AlertDialogHeader.displayName = 'AlertDialogHeader'

// const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
// 	<div
// 		className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
// 		{...props}
// 	/>
// )
// AlertDialogFooter.displayName = 'AlertDialogFooter'

const AlertDialogTitle = React.forwardRef<
	React.ElementRef<typeof AlertDialog.Title>,
	React.ComponentPropsWithoutRef<typeof AlertDialog.Title>
>(({ className, ...props }, ref) => (
	<AlertDialog.Title ref={ref} className={cn('text-xl font-semibold', className)} {...props} />
))
AlertDialogTitle.displayName = AlertDialog.Title.displayName

const AlertDialogDescription = React.forwardRef<
	React.ElementRef<typeof AlertDialog.Description>,
	React.ComponentPropsWithoutRef<typeof AlertDialog.Description>
>(({ className, ...props }, ref) => (
	<AlertDialog.Description
		ref={ref}
		className={cn('text-md text-muted-foreground', className)}
		{...props}
	/>
))
AlertDialogDescription.displayName = AlertDialog.Description.displayName

const AlertDialogAction = React.forwardRef<
	React.ElementRef<typeof AlertDialog.Action>,
	React.ComponentPropsWithoutRef<typeof AlertDialog.Action>
>(({ className, ...props }, ref) => (
	<AlertDialog.Action
		ref={ref}
		className={cn(buttonVariants({ variant: 'destructive' }), 'text-lg', className)}
		{...props}
	/>
))
AlertDialogAction.displayName = AlertDialog.Action.displayName

const AlertDialogCancel = React.forwardRef<
	React.ElementRef<typeof AlertDialog.Cancel>,
	React.ComponentPropsWithoutRef<typeof AlertDialog.Cancel>
>(({ className, ...props }, ref) => (
	<AlertDialog.Cancel
		ref={ref}
		className={cn(
			buttonVariants({ variant: 'outline' }),
			'text-lg border-2 border-border mt-2 sm:mt-0',
			className
		)}
		{...props}
	/>
))
AlertDialogCancel.displayName = AlertDialog.Cancel.displayName

export {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	// AlertDialogFooter,
	// AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
}
