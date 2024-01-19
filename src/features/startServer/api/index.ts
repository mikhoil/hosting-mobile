import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'

import { IServerStartRequest, IServerStartResponse } from '../types'

export async function startServer({ gameServerHash }: IServerStartRequest) {
	try {
		if (!gameServerHash) throw new Error('gameServerHash не указан')

		const response = await (
			await axiosAuth()
		).post<IServerStartResponse>(ServerApiUrls.start(), {
			gameServerHash,
		})

		if (!response.data.success) throw new Error('Не удалось запустить сервер')

		return response.data
	} catch (error) {
		console.log('error', error)
	}
}
