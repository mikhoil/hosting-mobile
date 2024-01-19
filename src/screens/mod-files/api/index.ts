import { IFile, axiosCurseForge } from '@/shared/api/curse-forge'
import { CurseForgeApiUrls } from '@/shared/api/urls'

export function getModFiles(modId: number) {
	return axiosCurseForge.post<{ data: IFile[] }>(CurseForgeApiUrls.files(), { modId })
}
