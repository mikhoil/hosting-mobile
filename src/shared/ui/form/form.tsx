import * as React from 'react'
import {
	Controller,
	ControllerProps,
	FieldPath,
	FieldValues,
	FormProvider,
	useFormContext,
} from 'react-hook-form'

import { cn } from '@/shared/lib/utils'
import { Label } from '@/shared/ui/label'
import { View, ViewProps } from 'react-native'

const Form = FormProvider

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
	name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	)
}

const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext)
	const itemContext = React.useContext(FormItemContext)
	const { getFieldState, formState } = useFormContext()

	const fieldState = getFieldState(fieldContext.name, formState)

	if (!fieldContext) {
		throw new Error('useFormField should be used within <FormField>')
	}

	const { id } = itemContext

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState,
	}
}

type FormItemContextValue = {
	id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = React.forwardRef<View, ViewProps>(({ className, ...props }, ref) => {
	const id = React.useId()

	return (
		<FormItemContext.Provider value={{ id }}>
			<View ref={ref} className={cn('space-y-2', className)} {...props} />
		</FormItemContext.Provider>
	)
})
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<
	React.ElementRef<typeof Label>,
	React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField()

	return (
		<Label
			ref={ref}
			className={cn(error && 'text-destructive', className)}
			htmlFor={formItemId}
			{...props}
		/>
	)
})
FormLabel.displayName = 'FormLabel'

const FormDescription = React.forwardRef<View, ViewProps>(({ className, ...props }, ref) => {
	const { formDescriptionId } = useFormField()

	return (
		<View
			ref={ref}
			id={formDescriptionId}
			className={cn('text-sm text-muted-foreground', className)}
			{...props}
		/>
	)
})
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<View, ViewProps>(({ className, children, ...props }, ref) => {
	const { error, formMessageId } = useFormField()
	const body = error ? String(error?.message) : children

	if (!body) {
		return null
	}

	return (
		<View
			ref={ref}
			id={formMessageId}
			className={cn('text-sm font-medium text-destructive', className)}
			{...props}
		>
			{body}
		</View>
	)
})
FormMessage.displayName = 'FormMessage'

export { Form, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField }
