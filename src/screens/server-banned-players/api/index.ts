import { bannedUsers } from '@/shared/fake-data/players.data'

export async function getBannedPlayers(gameServerHash: string) {
	// const instance = await axiosAuth()
	// return await instance.post<{ content: string, success: boolean, error: string }>(ServerApiUrls.getFileContent(), { gameServerHash, path: 'banned-players.json' })
	return bannedUsers
}
