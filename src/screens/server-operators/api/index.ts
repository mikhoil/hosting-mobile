// import { axiosAuth } from '@/shared/api/auth'
// import { ServerApiUrls } from '@/shared/api/urls'
import { operatorsUsers } from '@/shared/fake-data/players.data'

export async function getOperators(gameServerHash: string) {
	// const instance = await axiosAuth()
	// return await instance.post<{ content: string, success: boolean, error: string }>(ServerApiUrls.getFileContent(), { gameServerHash, path: 'ops.json' })
	return { content: operatorsUsers }
}
