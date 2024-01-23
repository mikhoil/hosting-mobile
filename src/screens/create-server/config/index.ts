import { IServerCreateRequest } from '@/entities/server/types/requests'

export const createServerDataConfig: Omit<IServerCreateRequest, 'name'> = {
	gameId: 1,
	tariffId: 1,
	period: 12,
	slots: 10,
	isTestPeriod: false,
	locationId: 1,
}
