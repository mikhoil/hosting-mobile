import { ModDescription } from '@/screens/mod-description/ui/ModDescription'
import { useSearchParams } from '@/shared/hooks/useSearchParams'

export default function Mod() {
	const { modId } = useSearchParams()

	return <ModDescription modId={+modId} />
}
