// import { axiosAuth } from '@/shared/api/auth'
// import { ServerApiUrls } from '@/shared/api/urls'

import { bannedIps } from "@/shared/fake-data/players.data";

export async function getBannedIps(gameServerHash: string) {
	// const instance = await axiosAuth()
	// return await instance.post<{ content: string, success: boolean, error: string }>(ServerApiUrls.getFileContent(), { gameServerHash, path: 'banned-ips.json' })
	return { content: bannedIps }
}
