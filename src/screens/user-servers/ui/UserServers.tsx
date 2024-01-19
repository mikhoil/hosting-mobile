import { ServerList } from '@/entities/server/ui/server-list/ServerList'
import { useFetchUserServers } from '@/shared/queries/server'

export function UserServers() {
	const { data: userServers, isLoading } = useFetchUserServers()

	return <ServerList isLoading={isLoading} servers={userServers} />
}
