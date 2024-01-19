import { IServerListRequest } from '@/entities/server/types/requests'
import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'
import { IServer } from '@/shared/types'

export async function getServer(serverHash: string | null | undefined) {
	const instance = await axiosAuth()
	return await instance.post<IServer>(ServerApiUrls.server(serverHash!))
	// return servers.find((server) => server.gameServerHash === serverHash)
}

export async function getUserServers({ kind }: IServerListRequest) {
	const instance = await axiosAuth()
	return await instance.post<{ servers: IServer[] }>(ServerApiUrls.userServers(), { kind })
	// return servers
}
