import { axiosAuth } from '@/shared/api/auth'
import { ServerApiUrls } from '@/shared/api/urls'

import { IServerStopRequest, IServerStopResponse } from '../types'

// #TODO переписать под бек
export async function stopServer({ gameServerHash }: IServerStopRequest) {
	try {
		if (!gameServerHash) throw new Error('gameServerHash не указан')

		const response = await (
			await axiosAuth()
		).post<IServerStopResponse>(ServerApiUrls.stop(), {
			gameServerHash,
		})

		if (!response.data.success) throw new Error('Не удалось остановить сервер')

		return response.data
	} catch (error) {
		console.log('error', error)
	}
}
