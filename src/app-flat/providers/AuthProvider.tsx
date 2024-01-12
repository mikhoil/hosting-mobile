import { AuthContext } from '@/entities/auth'
import { useAuthProvider } from '../../entities/auth'

export function AuthProvider({ children }: React.PropsWithChildren) {
	const auth = useAuthProvider()
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
