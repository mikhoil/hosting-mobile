// import { axiosAuth } from '@/shared/api/auth'
import { serverProperties } from '@/shared/fake-data/server.data'
// import { IServerProperty } from '@/shared/types'

export function getServerSettings(serverHash: string | null | undefined) {
	//return axiosAuth().get(ServerApiUrls.settings())
	return serverProperties
}

// export function saveServerSettings(newSettings: IServerProperty[]) {
// 	return axiosAuth().post('/server/settings/save', newSettings)
// }
