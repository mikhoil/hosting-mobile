import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'

export async function getServerConsole(serverHash: string) {
	return (await axiosAuth()).post<{
		Logs: {
			Id: number
			Record: string
		}[]
	}>(ServerApiUrls.getServerLogs(), { isLastLogs: false, page: null, gameServerHash: serverHash })
}

export async function sendCommandToServerConsole(gameServerHash: string, message: string) {
	const postSystem = 'rcon'

	return (await axiosAuth()).post<{ response: string; error: string; success: boolean }>(
		ServerApiUrls.sendCommand(),
		{
			gameServerHash,
			message,
			postSystem,
		}
	)
}
