import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'

export async function banPlayer(gameServerHash: string, playerNickname: string) {
	const postSystem = 'rcon'
	const message = `/ban ${playerNickname}`

	return (await axiosAuth()).post<{ response: string; error: string; success: boolean }>(
		ServerApiUrls.sendCommand(),
		{
			gameServerHash,
			message,
			postSystem,
		}
	)
}
