// import { axiosAuth } from '@/shared/api/auth';
// import { ServerApiUrls } from '@/shared/api/urls';
import { whiteListUsers } from '@/shared/fake-data/players.data';

export async function getWhitelist(gameServerHash: string) {
	// const instance = await axiosAuth();
	// return await instance.post<{ content: string, success: boolean, error: string }>(ServerApiUrls.getFileContent(), { gameServerHash, path: 'whitelist.json' })
	return { content: whiteListUsers }
}
