import { useStorageState } from '@/shared/hooks'
import { createContext, useContext } from 'react'
import { logout, signIn, signUp } from '../api'
import { AuthContextType, ILogoutRequest, ISignInRequest, ISignUpRequest, IUser } from '../types'

export const AuthContext = createContext<AuthContextType>({
	user: null,
	authToken: null,
	isUserLoading: false,
	isTokenLoading: false,
	signIn: async () => false,
	signUp: async () => false,
	logout: async () => {},
})

export const useAuth = () => {
	return useContext(AuthContext)
}

export function useAuthProvider(): AuthContextType {
	const [[isTokenLoading, authToken], setAuthToken] = useStorageState<string | null>('token')
	const [[isUserLoading, user], setUser] = useStorageState<IUser | null>('user')

	const handleSignIn = async (request: ISignInRequest) => {
		const { data } = await signIn(request)

		if (!data.authToken) {
			return false
		}

		setUser(data.user)
		setAuthToken(data.authToken)

		return true
	}

	const handleSignUp = async (request: ISignUpRequest) => {
		const { data } = await signUp(request)

		if (!data.authToken) {
			return false
		}

		setUser(data.user)
		setAuthToken(data.authToken)

		return true
	}

	const handleLogout = async (request: ILogoutRequest) => {
		const { status } = await logout(request)

		if (status !== 200) {
			return
		}

		setUser(null)
		setAuthToken(null)
	}

	return {
		user,
		authToken,
		isUserLoading,
		isTokenLoading,
		signIn: handleSignIn,
		signUp: handleSignUp,
		logout: handleLogout,
	}
}
