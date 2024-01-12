import { QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

import { queryClient } from '../../shared/lib/react-query'
import { AuthProvider } from './AuthProvider'

export function MainProvider({ children }: PropsWithChildren) {
	return (
		<AuthProvider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</AuthProvider>
	)
}
