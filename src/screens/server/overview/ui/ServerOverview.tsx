import { ActivePlayers } from '@/widgets/activePlayers'
import { CurrentUsage } from '@/widgets/currentUsage'

export function ServerOverview() {
	return (
		<>
			<ActivePlayers />
			<CurrentUsage />
		</>
	)
}
