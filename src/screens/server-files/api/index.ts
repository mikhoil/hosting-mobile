import { axiosAuth } from '@/shared/api/auth';
import { ServerApiUrls } from '@/shared/api/urls';
import { IFileNode } from '@/shared/types';

export async function getServerFiles(gameServerHash: string, path: string = '/usr/local/server') {
	const instance = await axiosAuth()
	return await instance.post<{ files: IFileNode[] }>(ServerApiUrls.listDirectory(), { gameServerHash, path })
	// return fileNodes.sort((a, b) => a.name!.localeCompare(b.name!))
}

export async function getServerFileContent(gameServerHash: string, path: string) {
	const instance = await axiosAuth()
	return await instance.post<{ content: string, success: boolean, error: string }>(ServerApiUrls.getFileContent(), { gameServerHash, path })
}

// export function getNodeFiles(path: string): IFileNode[] {
// 	if (path === '') return filesTree

// 	return filesTree
// }

// function deepSearch<Key extends keyof IFileNode>(
// 	object: IFileNode | IFileNode[],
// 	key: Key,
// 	predicate: (k: Key, v: IFileNode[Key]) => boolean
// ): IFileNode | undefined {
// 	if (Array.isArray(object)) {
// 		for (const item of object) {
// 			const result = deepSearch(item, key, predicate)
// 			if (result) {
// 				return result
// 			}
// 		}
// 	} else if (typeof object === 'object' && object !== null) {
// 		if (predicate(key, object[key])) {
// 			return object
// 		}

// 		const children = object.children
// 		if (children) {
// 			const result = deepSearch(children, key, predicate)
// 			if (result) {
// 				return result
// 			}
// 		}
// 	}

// 	return undefined
// }
