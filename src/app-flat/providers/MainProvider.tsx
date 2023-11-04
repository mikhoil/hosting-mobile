import { QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

import { queryClient } from '../../shared/lib/react-query'

export function MainProvider({ children }: PropsWithChildren) {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
