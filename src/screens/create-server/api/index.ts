import { IServerCreateResponse } from '@/entities/server/types/requests'
import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'
import { createServerDataConfig } from './../config/index'

export async function createServer(createServerData: { name: string }) {
	const instance = await axiosAuth()
	return await instance.post<IServerCreateResponse>(ServerApiUrls.create(), {
		...createServerData,
		...createServerDataConfig,
	})
}
