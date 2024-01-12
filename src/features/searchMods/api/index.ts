import { IMod, SearchModsRequest, axiosCurseForge } from '@/shared/api/curse-forge'
import { CurseForgeApiUrls } from '@/shared/api/urls'

export function searchMods(request: SearchModsRequest) {
	console.log(request)
	return axiosCurseForge.post<{ data: IMod[] }>(CurseForgeApiUrls.searchMods(), request)
}
